import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdmprr1mz.css';
import '../../css/t/t2lllz9an.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdmprr1mz"/><path class="t2lllz9an"/></g>`,
		"fallback": "bi:phone",
	});
}

export default Component;
