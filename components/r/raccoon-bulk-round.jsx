import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u13xi4qun.css';
import '../../css/h/h8xhbbh2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u13xi4qun"/><path class="h8xhbbh2a"/></g>`,
		"fallback": "coolicons:raccoon-bulk-round",
	});
}

export default Component;
