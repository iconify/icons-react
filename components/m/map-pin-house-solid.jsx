import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyszq213g.css';
import '../../css/n/n3qnzccsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyszq213g"/><path class="n3qnzccsn"/></g>`,
		"fallback": "mynaui:map-pin-house-solid",
	});
}

export default Component;
