import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbeq_z80i.css';
import '../../css/l/lm_iwebwk.css';
import '../../css/z/zxb5rhbmi.css';

const viewBox = {"width":38,"height":38};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGie8xTc7m" cx="261" cy="240" r="341" gradientTransform="matrix(1.3 .00095 -.00102 1.4 -89.2 -86.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fbeq_z80i"/><stop offset="1" class="lm_iwebwk"/></radialGradient></defs><path fill="url(#SVGie8xTc7m)" transform="translate(1.4 1.38)scale(.0709)" class="zxb5rhbmi"/>`,
		"fallback": "thesvg-color:privatebin",
	});
}

export default Component;
