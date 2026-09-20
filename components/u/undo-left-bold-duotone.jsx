import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sib4vsq8d.css';
import '../../css/w/w15t94hnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sib4vsq8d"/><path class="w15t94hnn"/></g>`,
		"fallback": "solar:undo-left-bold-duotone",
	});
}

export default Component;
