import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9l_g_kht.css';
import '../../css/f/fslmcjxus.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9l_g_kht"/><path class="fslmcjxus"/></g>`,
		"fallback": "glyphs:intersect-duo",
	});
}

export default Component;
