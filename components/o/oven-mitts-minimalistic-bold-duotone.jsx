import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzcyqibve.css';
import '../../css/y/y_zmmbcqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vzcyqibve"/><path class="y_zmmbcqk"/></g>`,
		"fallback": "solar:oven-mitts-minimalistic-bold-duotone",
	});
}

export default Component;
