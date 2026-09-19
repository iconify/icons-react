import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f54b_9b8c.css';
import '../../css/j/j64n2mbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f54b_9b8c"/><path class="j64n2mbvc"/></g>`,
		"fallback": "bi:person-check-fill",
	});
}

export default Component;
