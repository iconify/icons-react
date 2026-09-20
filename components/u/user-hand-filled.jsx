import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9kqrfbgx.css';
import '../../css/j/jiylh3bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9kqrfbgx"/><path class="jiylh3bdk"/></g>`,
		"fallback": "reicon:user-hand-filled",
	});
}

export default Component;
