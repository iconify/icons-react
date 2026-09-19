import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7o5dbd0k.css';
import '../../css/z/zjy5uhbzp.css';
import '../../css/o/ox-hxzbwo.css';
import '../../css/y/yhlcf8uvt.css';
import '../../css/t/t2w3yccpg.css';
import '../../css/w/wxh193lsd.css';
import '../../css/u/ubg4fyb1n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGddJ1vbZp" x1="21.31" x2="83.8" y1="22.93" y2="66.69" gradientTransform="translate(-6.586 43.537)scale(.45666)" gradientUnits="userSpaceOnUse"><stop offset=".19" class="w7o5dbd0k"/><stop offset=".29" class="zjy5uhbzp"/><stop offset=".47" class="ox-hxzbwo"/><stop offset=".7" class="yhlcf8uvt"/><stop offset=".89" class="t2w3yccpg"/></linearGradient></defs><path class="wxh193lsd"/><path fill="url(#SVGddJ1vbZp)" class="ubg4fyb1n"/>`,
		"fallback": "devicon:photonengine",
	});
}

export default Component;
