import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oca47wouj.css';
import '../../css/q/qd7dbcslc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oca47wouj"/><path class="qd7dbcslc"/></g>`,
		"fallback": "healthicons:ppe-face-shield-alt-24px",
	});
}

export default Component;
