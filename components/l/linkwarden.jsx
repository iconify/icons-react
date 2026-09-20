import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mivxb5rsc.css';
import '../../css/l/lsklipwzp.css';
import '../../css/z/zu5uxko-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGZ5mGyb0v" cx="-703.01" cy="797.671" r=".929" gradientTransform="rotate(89.951 -438255.208 -27352.808)scale(584 -584)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="mivxb5rsc"/></radialGradient><path fill="url(#SVGZ5mGyb0v)" class="lsklipwzp"/><path class="zu5uxko-h"/>`,
		"fallback": "selfhst:linkwarden",
	});
}

export default Component;
