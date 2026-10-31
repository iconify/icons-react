import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/ivdxjqb8r.css';
import '../../css/t/tjsx-3blg.css';
import '../../css/v/vv1g9wbdy.css';
import '../../css/i/ij8g0fbta.css';
import '../../css/t/t7ynvwbpo.css';
import '../../css/l/lw71_8b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ivdxjqb8r wm-k"/><path class="tjsx-3blg wm-deco"/><path fill="url(#SVG8cgrrczU)" class="vv1g9wbdy wm-k"/><path class="ij8g0fbta wm-shadow"/><path class="t7ynvwbpo wm-shine"/><path class="lw71_8b9c wm-shine"/></g>`,
		"fallback": "withicons-valentine:user-circle",
	});
}

export default Component;
