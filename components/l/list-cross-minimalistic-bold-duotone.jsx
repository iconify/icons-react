import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otfz7qbja.css';
import '../../css/a/a222llbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="otfz7qbja"/><path class="a222llbrh"/></g>`,
		"fallback": "solar:list-cross-minimalistic-bold-duotone",
	});
}

export default Component;
