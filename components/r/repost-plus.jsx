import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krpg-50tb.css';
import '../../css/j/j4-xy851k.css';
import '../../css/k/k1xkuvb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krpg-50tb"/><path class="j4-xy851k"/><path class="k1xkuvb1x"/></g>`,
		"fallback": "andrsrxn:repost-plus",
	});
}

export default Component;
