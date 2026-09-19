import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qh24kfb-e.css';
import '../../css/f/fsz_djbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qh24kfb-e"/><path class="fsz_djbcz"/></g>`,
		"fallback": "flowbite:user-graduate-solid",
	});
}

export default Component;
