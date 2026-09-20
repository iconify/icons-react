import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/me8s9lchj.css';
import '../../css/w/wiiyr81vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="me8s9lchj"/><path class="wiiyr81vc"/></g>`,
		"fallback": "solar:laptop-2-bold-duotone",
	});
}

export default Component;
