import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqmadybth.css';
import '../../css/o/ouj0mxufp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lqmadybth"/><path class="ouj0mxufp"/></g>`,
		"fallback": "flowbite:wand-magic-sparkles-solid",
	});
}

export default Component;
