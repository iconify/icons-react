import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nypjrrb4o.css';
import '../../css/t/te6squb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nypjrrb4o"/><path class="te6squb-r"/></g>`,
		"fallback": "reicon:message-question-filled",
	});
}

export default Component;
