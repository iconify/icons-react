import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/d/d71v2ob5d.css';
import '../../css/x/xtk74bbse.css';
import '../../css/h/h1v2asbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGPQGkHd2I" cx="7.86" cy="6.74" r="23.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="d71v2ob5d wm-shadow"/><path fill="url(#SVGPQGkHd2I)" class="wm-k xtk74bbse"/><path class="h1v2asbep wm-shine"/></g>`,
		"fallback": "withicons-rangoli:magnet",
	});
}

export default Component;
