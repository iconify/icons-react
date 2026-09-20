import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dt3-6z0hc.css';
import '../../css/o/o8nc8yb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dt3-6z0hc"/><path class="o8nc8yb_e"/></g>`,
		"fallback": "reicon:mask-square-duotone",
	});
}

export default Component;
