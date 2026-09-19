import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fe9zxptfy.css';
import '../../css/n/nc955vbly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fe9zxptfy"/><path class="nc955vbly"/></g>`,
		"fallback": "healthicons:smoking-cessation",
	});
}

export default Component;
