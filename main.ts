controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -300
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 5 2 . . . . . . . 
    . . . . 2 . 4 4 4 . . . . . . . 
    . . . . . 2 4 4 4 . . . . . . . 
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . 5 5 . 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
