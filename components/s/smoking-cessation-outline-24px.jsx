import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cugihq3tj.css';
import '../../css/z/zmobsfbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cugihq3tj"/><path class="zmobsfbkh"/></g>`,
		"fallback": "healthicons:smoking-cessation-outline-24px",
	});
}

export default Component;
