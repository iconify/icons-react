import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dy1c4rh2x.css';
import '../../css/j/jzi3ah8xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dy1c4rh2x"/><path class="jzi3ah8xv"/></g>`,
		"fallback": "iconaut:router-solid",
	});
}

export default Component;
