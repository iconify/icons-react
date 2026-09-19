import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zj60nym1q.css';
import '../../css/k/k5geneize.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zj60nym1q"/><path class="k5geneize"/></g>`,
		"fallback": "bi:nintendo-switch",
	});
}

export default Component;
