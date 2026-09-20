import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hfdgyfoeu.css';
import '../../css/l/llpdovbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hfdgyfoeu"/><path class="llpdovbes"/></g>`,
		"fallback": "solar:oven-mitts-bold-duotone",
	});
}

export default Component;
