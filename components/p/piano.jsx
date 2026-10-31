import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/r12wxezey.css';
import '../../css/h/hy5r1rb6i.css';
import '../../css/m/m5olh59za.css';
import '../../css/k/kh9zgsb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUdsh5bGJ" x1="10.01" x2="14.01" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="r12wxezey wm-k"/><path class="hy5r1rb6i wm-k"/><path fill="url(#SVGUdsh5bGJ)" class="m5olh59za wm-k"/><path class="kh9zgsb8m wm-shadow"/></g>`,
		"fallback": "withicons-valentine:piano",
	});
}

export default Component;
