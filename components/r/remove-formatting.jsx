import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/u/uoupsbb5d.css';
import '../../css/m/m96lp7dww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGtd7x5bre" cx="6.66" cy="6.9" r="21.34" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGtd7x5bre)" class="uoupsbb5d wm-k"/><path class="m96lp7dww wm-s"/></g>`,
		"fallback": "withicons-rangoli:remove-formatting",
	});
}

export default Component;
