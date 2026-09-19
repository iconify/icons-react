import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3vkbbl7n.css';
import '../../css/y/ygt0ixysc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u3vkbbl7n"/><path class="ygt0ixysc"/></g>`,
		"fallback": "bi:ticket-detailed",
	});
}

export default Component;
