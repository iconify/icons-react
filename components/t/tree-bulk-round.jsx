import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yvnxgvb1b.css';
import '../../css/x/x_lv4nmav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yvnxgvb1b"/><path class="x_lv4nmav"/></g>`,
		"fallback": "coolicons:tree-bulk-round",
	});
}

export default Component;
