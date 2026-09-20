import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/in4_ucqdo.css';
import '../../css/i/i5bh0rb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="in4_ucqdo"/><path class="i5bh0rb1n"/></g>`,
		"fallback": "reicon:star-fall2-duotone",
	});
}

export default Component;
