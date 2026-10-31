import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/x/xilozebmt.css';
import '../../css/a/a6tyi16ny.css';
import '../../css/x/x1yj7zbhl.css';
import '../../css/p/pgawlhy0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1DtEedzw" cx="8.3" cy="6.18" r="24.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow xilozebmt"/><path fill="url(#SVG1DtEedzw)" class="a6tyi16ny wm-k"/><path class="wm-shine x1yj7zbhl"/><path class="pgawlhy0y wm-s"/></g>`,
		"fallback": "withicons-rangoli:map-pin-plus",
	});
}

export default Component;
