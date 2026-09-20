import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/l/l3g4qm5wo.css';
import '../../css/u/un7ztky7q.css';
import '../../css/r/rpzx_aboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="l3g4qm5wo"/><path class="un7ztky7q"/><path class="rpzx_aboi"/></g>`,
		"fallback": "solar:smile-circle-bold-duotone",
	});
}

export default Component;
