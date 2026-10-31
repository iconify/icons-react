import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/e6uzk2b1f.css';
import '../../css/f/f3bp2gy5m.css';
import '../../css/d/d-uqzskaw.css';
import '../../css/f/f6vsh0iwa.css';
import '../../css/d/dn9yetb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGexIMpcuO" cx="7.86" cy="6.46" r="24.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="e6uzk2b1f wm-shadow"/><path fill="url(#SVGexIMpcuO)" class="f3bp2gy5m wm-k"/><path class="d-uqzskaw wm-k"/><path class="f6vsh0iwa wm-shine"/><path class="dn9yetb0w wm-s"/></g>`,
		"fallback": "withicons-rangoli:ring-box",
	});
}

export default Component;
