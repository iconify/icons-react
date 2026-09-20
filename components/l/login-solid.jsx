import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t9dnbqw4m.css';
import '../../css/d/dfqfok6kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t9dnbqw4m"/><path class="dfqfok6kc"/></g>`,
		"fallback": "mynaui:login-solid",
	});
}

export default Component;
