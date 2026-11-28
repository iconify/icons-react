import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcu59kbfz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c0mmavm7v.css';
import '../../css/e/e8wttxgta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcu59kbfz secondary"/><g class="dt0cm9dhy primary"><path class="c0mmavm7v"/><path class="e8wttxgta"/></g>`,
		"fallback": "iconaut:messages-circle-duo",
	});
}

export default Component;
