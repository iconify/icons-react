import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adr88jbib.css';
import '../../css/j/j4-u4dbux.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="adr88jbib"/><path class="j4-u4dbux"/></g>`,
		"fallback": "at-icons:ring-with-gem",
	});
}

export default Component;
