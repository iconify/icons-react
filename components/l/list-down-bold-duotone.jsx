import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlrr4l2jm.css';
import '../../css/k/k3ick-5df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qlrr4l2jm"/><path class="k3ick-5df"/></g>`,
		"fallback": "solar:list-down-bold-duotone",
	});
}

export default Component;
