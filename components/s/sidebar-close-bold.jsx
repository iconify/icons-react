import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tltdwdbmd.css';
import '../../css/j/jt5m38bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tltdwdbmd"/><path class="jt5m38bhj"/></g>`,
		"fallback": "solar:sidebar-close-bold",
	});
}

export default Component;
