import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/e69zp363c.css';
import '../../css/s/skbfp7ecv.css';
import '../../css/m/mh22xjbtv.css';
import '../../css/d/d-8rgjxpg.css';
import '../../css/i/i0itsu56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGVgbEadSn" cx="7.38" cy="6.4" r="26.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="e69zp363c wm-shadow"/><path fill="url(#SVGVgbEadSn)" class="skbfp7ecv wm-k"/><path class="mh22xjbtv wm-shine"/><path class="d-8rgjxpg wm-deco"/><path class="i0itsu56j wm-deco"/></g>`,
		"fallback": "withicons-rangoli:star",
	});
}

export default Component;
