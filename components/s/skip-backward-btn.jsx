import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-mwa6bqb.css';
import '../../css/x/xjy3z5hee.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e-mwa6bqb"/><path class="xjy3z5hee"/></g>`,
		"fallback": "bi:skip-backward-btn",
	});
}

export default Component;
