import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/d/d9onzm8qx.css';
import '../../css/v/vhy_tfbpo.css';
import '../../css/d/ddi6grb-s.css';
import '../../css/r/rnq4mp7yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGvYfKoecE" cx="7.64" cy="6.85" r="24.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="d9onzm8qx wm-shadow"/><path fill="url(#SVGvYfKoecE)" class="vhy_tfbpo wm-k"/><path class="ddi6grb-s wm-shine"/><path class="rnq4mp7yf wm-s"/></g>`,
		"fallback": "withicons-rangoli:message-square-dot",
	});
}

export default Component;
