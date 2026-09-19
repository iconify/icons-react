import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg6p7c7at.css';
import '../../css/u/ugfhhfbfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jg6p7c7at"/><path class="ugfhhfbfs"/></g>`,
		"fallback": "heroicons:pencil-square-16-solid",
	});
}

export default Component;
