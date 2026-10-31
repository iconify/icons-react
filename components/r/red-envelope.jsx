import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/z/z5ee65-7q.css';
import '../../css/b/ba2eczbfn.css';
import '../../css/d/dzhcm_vvi.css';
import '../../css/k/k1kbe-bps.css';
import '../../css/p/prxg5gbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGpNUNibRz" cx="8.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow z5ee65-7q"/><path fill="url(#SVGpNUNibRz)" class="ba2eczbfn wm-k"/><path class="dzhcm_vvi wm-k"/><path class="k1kbe-bps wm-shine"/><path class="prxg5gbyj wm-s"/></g>`,
		"fallback": "withicons-rangoli:red-envelope",
	});
}

export default Component;
