import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar3asl6qh.css';
import '../../css/t/ter14omaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ar3asl6qh secondary"/><path class="primary ter14omaj"/></g>`,
		"fallback": "iconaut:star-medal-duotone",
	});
}

export default Component;
