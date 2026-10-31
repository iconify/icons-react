import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/a/adif_qbtr.css';
import '../../css/m/m5s81sbgq.css';
import '../../css/d/dahcoccbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGXE3wIb5w" cx="7.34" cy="6.06" r="26.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGXE3wIb5w)" class="adif_qbtr wm-k"/><path class="m5s81sbgq wm-deco"/><path class="dahcoccbs wm-deco"/></g>`,
		"fallback": "withicons-rangoli:loader-circle",
	});
}

export default Component;
