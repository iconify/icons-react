import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/n/nk1v_0bdt.css';
import '../../css/h/h_buzym6o.css';
import '../../css/c/caz40fqlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGwd0s4dxF" cx="7.64" cy="7.3" r="23.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="nk1v_0bdt wm-shadow"/><path fill="url(#SVGwd0s4dxF)" class="h_buzym6o wm-k"/><path class="caz40fqlw wm-shine"/></g>`,
		"fallback": "withicons-rangoli:quote",
	});
}

export default Component;
