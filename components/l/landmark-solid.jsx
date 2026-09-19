import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frt9n6w4o.css';
import '../../css/x/xr2clcb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="frt9n6w4o"/><path class="xr2clcb4z"/></g>`,
		"fallback": "flowbite:landmark-solid",
	});
}

export default Component;
