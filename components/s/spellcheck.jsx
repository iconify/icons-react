import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2fplgyzu.css';
import '../../css/s/srwz6eb7b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2fplgyzu"/><path class="srwz6eb7b"/></g>`,
		"fallback": "bi:spellcheck",
	});
}

export default Component;
