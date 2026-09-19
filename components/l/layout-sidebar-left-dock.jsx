import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tazpy2b7v.css';
import '../../css/j/j_t6d7uhh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tazpy2b7v"/><path clip-rule="evenodd" class="j_t6d7uhh"/></g>`,
		"fallback": "codicon:layout-sidebar-left-dock",
	});
}

export default Component;
