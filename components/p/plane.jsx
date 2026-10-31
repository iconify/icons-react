import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/eo2jk08hb.css';
import '../../css/q/qobnlqbhc.css';
import '../../css/z/zxnia3psq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGQ1hUEehj" cx="6.86" cy="7.04" r="25.71" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="eo2jk08hb wm-shadow"/><path fill="url(#SVGQ1hUEehj)" class="qobnlqbhc wm-k"/><path class="wm-shine zxnia3psq"/></g>`,
		"fallback": "withicons-rangoli:plane",
	});
}

export default Component;
