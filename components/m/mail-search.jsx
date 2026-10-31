import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/z/z9ys0wbkb.css';
import '../../css/e/e2k1heb9i.css';
import '../../css/d/dq-d8fj0e.css';
import '../../css/q/qmhe46h2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGfxIIZcCM" cx="7.42" cy="7.3" r="24.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow z9ys0wbkb"/><path fill="url(#SVGfxIIZcCM)" class="e2k1heb9i wm-k"/><path class="dq-d8fj0e wm-shine"/><path class="qmhe46h2s wm-s"/></g>`,
		"fallback": "withicons-rangoli:mail-search",
	});
}

export default Component;
