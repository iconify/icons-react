import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1ydzrboi.css';
import '../../css/e/e2k9qp7gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary y1ydzrboi"/><path class="e2k9qp7gr primary"/></g>`,
		"fallback": "iconaut:pill-duotone",
	});
}

export default Component;
