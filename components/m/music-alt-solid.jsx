import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/en1u28uhj.css';
import '../../css/v/vg2wr6byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="en1u28uhj"/><path clip-rule="evenodd" class="vg2wr6byn"/></g>`,
		"fallback": "flowbite:music-alt-solid",
	});
}

export default Component;
