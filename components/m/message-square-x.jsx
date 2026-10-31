import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/u/uiybjgbkc.css';
import '../../css/t/tqnwfab9p.css';
import '../../css/m/m8tip90-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGvYfKoecE" cx="7.64" cy="6.85" r="24.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="uiybjgbkc wm-shadow"/><path fill="url(#SVGvYfKoecE)" class="tqnwfab9p wm-k"/><path class="m8tip90-n wm-shine"/></g>`,
		"fallback": "withicons-rangoli:message-square-x",
	});
}

export default Component;
