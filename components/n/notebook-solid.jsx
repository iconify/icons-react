import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lcjftfb1r.css';
import '../../css/c/cm0kq7c0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lcjftfb1r"/><path class="cm0kq7c0s"/></g>`,
		"fallback": "iconaut:notebook-solid",
	});
}

export default Component;
