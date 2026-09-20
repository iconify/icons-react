import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asvywvbhq.css';
import '../../css/e/e61yf6bsm.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="asvywvbhq"/><path class="e61yf6bsm"/></g>`,
		"fallback": "iwwa:tag",
	});
}

export default Component;
