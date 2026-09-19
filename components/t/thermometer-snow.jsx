import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y16v6kbgq.css';
import '../../css/i/ir0h6mb0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y16v6kbgq"/><path class="ir0h6mb0g"/></g>`,
		"fallback": "bi:thermometer-snow",
	});
}

export default Component;
