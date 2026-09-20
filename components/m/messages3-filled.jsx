import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rho5s_1yh.css';
import '../../css/q/q6wnbrnhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rho5s_1yh"/><path class="q6wnbrnhv"/></g>`,
		"fallback": "reicon:messages3-filled",
	});
}

export default Component;
