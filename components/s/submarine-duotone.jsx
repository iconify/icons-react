import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_-spv35d.css';
import '../../css/p/pyz4fwb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_-spv35d secondary"/><path class="primary pyz4fwb6n"/></g>`,
		"fallback": "iconaut:submarine-duotone",
	});
}

export default Component;
