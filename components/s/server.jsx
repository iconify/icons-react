import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/jkttv8xmt.css';
import '../../css/c/c999kc2aw.css';
import '../../css/g/gka_wpbgw.css';
import '../../css/g/gyytzlc5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxA3N6cKT" cx="7.64" cy="6.18" r="25.85" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="jkttv8xmt wm-shadow"/><path fill="url(#SVGxA3N6cKT)" class="c999kc2aw wm-k"/><path class="gka_wpbgw wm-shine"/><path class="gyytzlc5m wm-deco"/></g>`,
		"fallback": "withicons-rangoli:server",
	});
}

export default Component;
