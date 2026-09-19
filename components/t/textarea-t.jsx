import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s53rdib7b.css';
import '../../css/j/jk8l_bc-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s53rdib7b"/><path class="jk8l_bc-t"/></g>`,
		"fallback": "bi:textarea-t",
	});
}

export default Component;
