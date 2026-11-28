import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/c/c4lp53bvo.css';
import '../../css/u/u2lu8tmtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dp12a2bii"/><path class="c4lp53bvo"/><path class="u2lu8tmtb"/></g>`,
		"fallback": "iconaut:message-square-reply",
	});
}

export default Component;
