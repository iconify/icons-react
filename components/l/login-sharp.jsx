import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j566dobqx.css';
import '../../css/w/wqylovk0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j566dobqx"/><path class="wqylovk0t"/></g>`,
		"fallback": "pixelarticons:login-sharp",
	});
}

export default Component;
