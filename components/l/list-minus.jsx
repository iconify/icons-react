import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/u46ivbblu.css';
import '../../css/g/g89pbccxy.css';
import '../../css/n/ne_5v2vgt.css';
import '../../css/l/lyro0xb7c.css';
import '../../css/i/icnbnbcgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiMIkUbST" x1="10" x2="14" y1="5" y2="18.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="u46ivbblu wm-k"/><path class="g89pbccxy wm-s"/><path class="ne_5v2vgt wm-deco"/><path fill="url(#SVGiMIkUbST)" class="lyro0xb7c wm-k"/><path class="icnbnbcgc wm-s"/></g>`,
		"fallback": "withicons-valentine:list-minus",
	});
}

export default Component;
