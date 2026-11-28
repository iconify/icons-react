import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-e-e7b_b.css';
import '../../css/w/w3a3tyefz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t-e-e7b_b"/><path class="w3a3tyefz"/></g>`,
		"fallback": "iconaut:laptop-solid",
	});
}

export default Component;
