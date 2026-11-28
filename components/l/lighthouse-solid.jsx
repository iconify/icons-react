import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmrqm9d8p.css';
import '../../css/u/uh23yfzqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wmrqm9d8p"/><path class="uh23yfzqz"/></g>`,
		"fallback": "iconaut:lighthouse-solid",
	});
}

export default Component;
