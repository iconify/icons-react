import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fhdeaqbuh.css';
import '../../css/t/ts7tluu7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fhdeaqbuh secondary"/><path class="primary ts7tluu7n"/></g>`,
		"fallback": "iconaut:merge-duotone",
	});
}

export default Component;
