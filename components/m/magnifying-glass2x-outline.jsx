import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h__9ti67x.css';
import '../../css/i/ign-a0bfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h__9ti67x"/><path clip-rule="evenodd" class="ign-a0bfy"/></g>`,
		"fallback": "healthicons:magnifying-glass2x-outline",
	});
}

export default Component;
