import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y0fibjbln.css';
import '../../css/b/bfkn6jbjx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y0fibjbln"/><path class="bfkn6jbjx"/></g>`,
		"fallback": "bi:receipt-cutoff",
	});
}

export default Component;
