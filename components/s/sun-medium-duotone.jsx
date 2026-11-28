import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s42d0-b8k.css';
import '../../css/y/yqp8cuawq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s42d0-b8k secondary"/><path class="primary yqp8cuawq"/></g>`,
		"fallback": "iconaut:sun-medium-duotone",
	});
}

export default Component;
