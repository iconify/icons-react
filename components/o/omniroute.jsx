import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyl7df4jv.css';
import '../../css/z/z2ra-1ban.css';
import '../../css/u/ujmnkboja.css';
import '../../css/n/nbdn7eb6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGmP1vtdFX" x1="0" x2="512" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fyl7df4jv"/><stop offset="1" class="z2ra-1ban"/></linearGradient><path fill="url(#SVGmP1vtdFX)" class="ujmnkboja"/><path class="nbdn7eb6m"/>`,
		"fallback": "selfhst:omniroute",
	});
}

export default Component;
