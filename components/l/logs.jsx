import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/r5dgukbgu.css';
import '../../css/w/w9bureb7r.css';
import '../../css/m/mdfo7wbcn.css';
import '../../css/g/gyytzlc5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6HxgaeIr" cx="7.2" cy="7.02" r="25.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="r5dgukbgu wm-shadow"/><path fill="url(#SVG6HxgaeIr)" class="w9bureb7r wm-k"/><path class="mdfo7wbcn wm-shine"/><path class="gyytzlc5m wm-deco"/></g>`,
		"fallback": "withicons-rangoli:logs",
	});
}

export default Component;
