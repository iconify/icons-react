import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzn4hu2ty.css';
import '../../css/k/k_b67e_uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yzn4hu2ty"/><path class="k_b67e_uc"/></g>`,
		"fallback": "solar:map-point-bold-duotone",
	});
}

export default Component;
