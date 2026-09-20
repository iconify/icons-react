import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d45ihcc9j.css';
import '../../css/d/dt0qkcboc.css';
import '../../css/y/yx9f-fbph.css';
import '../../css/e/etgzitbbe.css';
import '../../css/u/uc72e8v0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d45ihcc9j"/><linearGradient id="SVGlpXqtiDc" x1="0" x2="440.435" y1="226.487" y2="226.487" gradientTransform="matrix(1 0 0 -1 0 513.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dt0qkcboc"/><stop offset="1" class="yx9f-fbph"/></linearGradient><path fill="url(#SVGlpXqtiDc)" class="etgzitbbe"/><path class="uc72e8v0x"/>`,
		"fallback": "selfhst:interlock",
	});
}

export default Component;
