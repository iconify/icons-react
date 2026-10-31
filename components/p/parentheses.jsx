import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/jpx32nbcp.css';
import '../../css/l/lm9xrqbnt.css';
import '../../css/d/dzw-occnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGqTTt9dKJ" cx="7.91" cy="6.34" r="24.71" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGqTTt9dKJ)" class="jpx32nbcp wm-k"/><path class="lm9xrqbnt wm-deco"/><path class="dzw-occnn wm-deco"/></g>`,
		"fallback": "withicons-rangoli:parentheses",
	});
}

export default Component;
