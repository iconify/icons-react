import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/z/zt4dsi0wb.css';
import '../../css/d/d6sw3acpi.css';
import '../../css/y/y6ympgwwk.css';
import '../../css/p/p7shhrbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxA3N6cKT" cx="7.64" cy="6.18" r="25.85" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow zt4dsi0wb"/><path fill="url(#SVGxA3N6cKT)" class="d6sw3acpi wm-k"/><path class="wm-shine y6ympgwwk"/><path class="p7shhrbbj wm-s"/></g>`,
		"fallback": "withicons-rangoli:server-off",
	});
}

export default Component;
