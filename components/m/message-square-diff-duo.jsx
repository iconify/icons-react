import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjd2x0bfl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/n/n5y6r804h.css';
import '../../css/t/tocyj6bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjd2x0bfl secondary"/><g class="dt0cm9dhy primary"><path class="dp12a2bii"/><path class="n5y6r804h"/><path class="tocyj6bym"/></g>`,
		"fallback": "iconaut:message-square-diff-duo",
	});
}

export default Component;
