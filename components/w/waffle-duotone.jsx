import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu3q1sbaa.css';
import '../../css/r/rrvkfh9_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eu3q1sbaa secondary"/><path class="primary rrvkfh9_s"/></g>`,
		"fallback": "iconaut:waffle-duotone",
	});
}

export default Component;
