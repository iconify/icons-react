import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujew9_diu.css';
import '../../css/d/dx2nl303c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujew9_diu"/><path class="dx2nl303c"/></g>`,
		"fallback": "solar:map-arrow-down-bold-duotone",
	});
}

export default Component;
