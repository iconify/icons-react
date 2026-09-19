import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2m6juedw.css';
import '../../css/y/y1fb4bcbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e2m6juedw"/><path class="y1fb4bcbg"/></g>`,
		"fallback": "bi:sourceforge",
	});
}

export default Component;
