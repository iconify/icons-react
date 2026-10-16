import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3vl4ebce.css';
import '../../css/w/wl7nksb1u.css';

const viewBox = {"width":463,"height":463};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t3vl4ebce"/><path class="wl7nksb1u"/></g>`,
		"fallback": "thesvg-color:openfga-dark",
	});
}

export default Component;
