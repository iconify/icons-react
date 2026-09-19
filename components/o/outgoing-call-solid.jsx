import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tf7tatarv.css';
import '../../css/h/h8x2rylov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tf7tatarv"/><path clip-rule="evenodd" class="h8x2rylov"/></g>`,
		"fallback": "flowbite:outgoing-call-solid",
	});
}

export default Component;
