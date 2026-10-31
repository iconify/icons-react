import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/m/m24gkemcp.css';
import '../../css/y/yd7czcm3i.css';
import '../../css/k/k6eg4kbso.css';
import '../../css/y/yo7y_dyqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="m24gkemcp wm-shadow"/><path fill="url(#SVGU00zieBw)" class="wm-k yd7czcm3i"/><path class="k6eg4kbso wm-shine"/><path class="wm-s yo7y_dyqy"/></g>`,
		"fallback": "withicons-rangoli:phone-call",
	});
}

export default Component;
