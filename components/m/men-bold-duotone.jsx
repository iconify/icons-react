import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m41ycqb4m.css';
import '../../css/y/y6iumpbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="m41ycqb4m"/><path class="y6iumpbqb"/></g>`,
		"fallback": "solar:men-bold-duotone",
	});
}

export default Component;
