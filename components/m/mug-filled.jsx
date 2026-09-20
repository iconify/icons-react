import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8y8l07hi.css';
import '../../css/a/ae7iqmblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q8y8l07hi"/><path clip-rule="evenodd" class="ae7iqmblq"/></g>`,
		"fallback": "reicon:mug-filled",
	});
}

export default Component;
