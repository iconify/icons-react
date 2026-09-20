import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/duhfz-o3s.css';
import '../../css/e/e2d64ubev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="duhfz-o3s"/><path class="e2d64ubev"/></g>`,
		"fallback": "reicon:login",
	});
}

export default Component;
