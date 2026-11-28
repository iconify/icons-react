import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-zh-ibev.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zwffu0v7l.css';
import '../../css/k/kg9s9rdnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-zh-ibev secondary"/><g class="dt0cm9dhy primary"><path class="zwffu0v7l"/><path class="kg9s9rdnt"/></g>`,
		"fallback": "iconaut:square-pen-duo",
	});
}

export default Component;
