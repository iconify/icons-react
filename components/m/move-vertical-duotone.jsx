import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kd46bfbns.css';
import '../../css/l/lqwiz8zvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kd46bfbns secondary"/><path class="lqwiz8zvl primary"/></g>`,
		"fallback": "iconaut:move-vertical-duotone",
	});
}

export default Component;
