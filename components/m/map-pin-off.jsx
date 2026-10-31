import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/k/kty6ikppr.css';
import '../../css/e/eo30f2fhv.css';
import '../../css/u/u_rhj3bmt.css';
import '../../css/p/p7shhrbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1DtEedzw" cx="8.3" cy="6.18" r="24.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="kty6ikppr wm-shadow"/><path fill="url(#SVG1DtEedzw)" class="eo30f2fhv wm-k"/><path class="u_rhj3bmt wm-shine"/><path class="p7shhrbbj wm-s"/></g>`,
		"fallback": "withicons-rangoli:map-pin-off",
	});
}

export default Component;
