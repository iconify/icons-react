import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/n/nhh93pu-n.css';
import '../../css/h/hyv4ocb_r.css';
import '../../css/b/bl3qwfbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="nhh93pu-n wm-shadow"/><path fill="url(#SVGU00zieBw)" class="hyv4ocb_r wm-k"/><path class="bl3qwfbts wm-shine"/></g>`,
		"fallback": "withicons-rangoli:layout-grid",
	});
}

export default Component;
