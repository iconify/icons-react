import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xr97oybqp.css';
import '../../css/h/hpk2ahbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xr97oybqp"/><path class="hpk2ahbvo"/></g>`,
		"fallback": "bi:tablet-landscape",
	});
}

export default Component;
