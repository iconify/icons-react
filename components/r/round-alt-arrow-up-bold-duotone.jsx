import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzht2dbcv.css';
import '../../css/e/eo3wccb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzht2dbcv"/><path class="eo3wccb_v"/></g>`,
		"fallback": "solar:round-alt-arrow-up-bold-duotone",
	});
}

export default Component;
