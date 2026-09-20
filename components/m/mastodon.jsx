import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggxvnybxb.css';
import '../../css/t/twcexwbvp.css';
import '../../css/f/fdfttbm9b.css';
import '../../css/y/yw-sn55so.css';

const viewBox = {"width":61,"height":65};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG2wvHBcLd)" class="ggxvnybxb"/><path class="twcexwbvp"/><defs><linearGradient id="SVG2wvHBcLd" x1="30.5" x2="30.5" y1="0" y2="65" gradientUnits="userSpaceOnUse"><stop class="fdfttbm9b"/><stop offset="1" class="yw-sn55so"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:mastodon",
	});
}

export default Component;
