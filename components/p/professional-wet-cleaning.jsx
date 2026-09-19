import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkzh7xq6v.css';
import '../../css/j/j3xy0pb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dkzh7xq6v"/><path class="j3xy0pb0u"/></g>`,
		"fallback": "ginetex:professional-wet-cleaning",
	});
}

export default Component;
