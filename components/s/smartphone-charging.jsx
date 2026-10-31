import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/py6nss6un.css';
import '../../css/k/knccs3bsj.css';
import '../../css/j/jrhej1u-o.css';
import '../../css/l/luqimub3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGx0Xyverc" cx="8.96" cy="6.18" r="22.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="py6nss6un wm-shadow"/><path fill="url(#SVGx0Xyverc)" class="knccs3bsj wm-k"/><path class="jrhej1u-o wm-shine"/><path class="luqimub3u wm-s"/></g>`,
		"fallback": "withicons-rangoli:smartphone-charging",
	});
}

export default Component;
