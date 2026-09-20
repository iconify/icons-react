import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oiyhbebwv.css';
import '../../css/e/ep4u01bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oiyhbebwv"/><path class="ep4u01bgi"/></g>`,
		"fallback": "reicon:temperature-duotone",
	});
}

export default Component;
