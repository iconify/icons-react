import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-ungcbcn.css';
import '../../css/n/nw5oqcbgf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n-ungcbcn"/><path class="nw5oqcbgf"/></g>`,
		"fallback": "bi:person-raised-hand",
	});
}

export default Component;
