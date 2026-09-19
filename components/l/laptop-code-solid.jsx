import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezg628b2f.css';
import '../../css/p/pspl-qbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ezg628b2f"/><path class="pspl-qbpy"/></g>`,
		"fallback": "flowbite:laptop-code-solid",
	});
}

export default Component;
