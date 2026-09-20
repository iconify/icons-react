import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5-jrewn.css';
import '../../css/z/zuyq0qy7l.css';

const viewBox = {"width":1510,"height":1515};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGA2qpVc3q" x2="1" gradientTransform="rotate(-12 4465 426)scale(1466.69 1469.872)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nn5-jrewn"/><stop offset="1" class="nn5-jrewn"/></linearGradient></defs><path fill="url(#SVGA2qpVc3q)" class="zuyq0qy7l"/>`,
		"fallback": "thesvg:pnj",
	});
}

export default Component;
