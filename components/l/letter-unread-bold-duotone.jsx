import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hj4zhi7dw.css';
import '../../css/r/rublczxpb.css';
import '../../css/h/h7cjiyxej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hj4zhi7dw"/><path class="rublczxpb"/><path class="h7cjiyxej"/></g>`,
		"fallback": "solar:letter-unread-bold-duotone",
	});
}

export default Component;
