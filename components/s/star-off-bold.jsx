import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0c796awt.css';
import '../../css/y/yoa8wxbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f0c796awt"/><path class="yoa8wxbwx"/></g>`,
		"fallback": "solar:star-off-bold",
	});
}

export default Component;
