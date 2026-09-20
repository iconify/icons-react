import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0m45tb7x.css';
import '../../css/a/ak0epqppc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0m45tb7x"/><path class="ak0epqppc"/></g>`,
		"fallback": "reicon:scissor2-filled",
	});
}

export default Component;
