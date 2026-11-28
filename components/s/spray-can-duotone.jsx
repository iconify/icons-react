import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etgxnbbke.css';
import '../../css/d/d1n_4062b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etgxnbbke secondary"/><path class="d1n_4062b primary"/></g>`,
		"fallback": "iconaut:spray-can-duotone",
	});
}

export default Component;
