import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4l9f5ari.css';
import '../../css/a/agz7tac5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q4l9f5ari"/><path class="agz7tac5t"/></g>`,
		"fallback": "reicon:plane-duotone",
	});
}

export default Component;
