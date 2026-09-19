import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujjm4u03y.css';
import '../../css/v/v93-pybtc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujjm4u03y"/><path class="v93-pybtc"/></g>`,
		"fallback": "bi:link-45deg",
	});
}

export default Component;
