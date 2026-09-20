import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oz-bic4ri.css';
import '../../css/h/hd2e3l_yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oz-bic4ri"/><path clip-rule="evenodd" class="hd2e3l_yr"/></g>`,
		"fallback": "solar:text-bold-circle-bold-duotone",
	});
}

export default Component;
