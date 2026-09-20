import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1s401jvz.css';
import '../../css/j/j91-pjb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m1s401jvz"/><path class="j91-pjb5p"/></g>`,
		"fallback": "solar:sim-cards-bold-duotone",
	});
}

export default Component;
