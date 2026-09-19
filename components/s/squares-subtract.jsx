import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qb3k-j94b.css';
import '../../css/y/yrzbl6c2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qb3k-j94b"/><path class="yrzbl6c2g"/></g>`,
		"fallback": "hugeicons:squares-subtract",
	});
}

export default Component;
