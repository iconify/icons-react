import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phj8rhbal.css';
import '../../css/d/dejc78qoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="phj8rhbal"/><path class="dejc78qoz"/></g>`,
		"fallback": "solar:map-arrow-right-bold-duotone",
	});
}

export default Component;
