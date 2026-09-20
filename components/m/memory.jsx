import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vufpefb9w.css';
import '../../css/x/xg0so8bze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vufpefb9w"/><path class="xg0so8bze"/></g>`,
		"fallback": "oui:memory",
	});
}

export default Component;
