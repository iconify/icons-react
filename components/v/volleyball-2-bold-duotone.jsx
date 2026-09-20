import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omuo_f6iv.css';
import '../../css/y/yb-69mwcu.css';
import '../../css/y/yg1lrvlrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="omuo_f6iv"/><path class="yb-69mwcu"/><path class="yg1lrvlrs"/></g>`,
		"fallback": "solar:volleyball-2-bold-duotone",
	});
}

export default Component;
