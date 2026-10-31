import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/i2mn9y99o.css';
import '../../css/l/lonxh-wcs.css';
import '../../css/h/hcp8ulbdv.css';
import '../../css/h/hwaxoj3hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvZLLte8C" x1="10" x2="14" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="i2mn9y99o wm-k"/><path class="lonxh-wcs wm-deco"/><path fill="url(#SVGvZLLte8C)" class="hcp8ulbdv wm-k"/><path class="hwaxoj3hx wm-shadow"/></g>`,
		"fallback": "withicons-valentine:italic",
	});
}

export default Component;
