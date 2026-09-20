import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vegvyb1ry.css';
import '../../css/q/qwv26ubpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vegvyb1ry"/><path clip-rule="evenodd" class="qwv26ubpg"/></g>`,
		"fallback": "solar:sun-bold",
	});
}

export default Component;
