import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfzr2pb2k.css';
import '../../css/v/v7_15vrcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dfzr2pb2k"/><path class="v7_15vrcd"/></g>`,
		"fallback": "solar:ticket-bold-duotone",
	});
}

export default Component;
