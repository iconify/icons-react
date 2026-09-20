import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufl7p3lat.css';
import '../../css/q/qldrtz99q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ufl7p3lat"/><path class="qldrtz99q"/></g>`,
		"fallback": "majesticons:trash-line",
	});
}

export default Component;
