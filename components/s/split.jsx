import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/x/x2pmuybmx.css';
import '../../css/n/nm8lo_gyl.css';
import '../../css/w/w6qrkk21e.css';
import '../../css/i/i680c8b_m.css';
import '../../css/u/uhlprxfpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhvR8zegt" x1="10" x2="14" y1="4" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k x2pmuybmx"/><path class="nm8lo_gyl wm-deco"/><path fill="url(#SVGhvR8zegt)" class="w6qrkk21e wm-k"/><path class="i680c8b_m wm-shadow"/><path class="uhlprxfpo wm-shine"/></g>`,
		"fallback": "withicons-valentine:split",
	});
}

export default Component;
