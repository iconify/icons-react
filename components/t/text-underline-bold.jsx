import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0sasccxq.css';
import '../../css/c/c7skrccsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w0sasccxq"/><path class="c7skrccsk"/></g>`,
		"fallback": "solar:text-underline-bold",
	});
}

export default Component;
