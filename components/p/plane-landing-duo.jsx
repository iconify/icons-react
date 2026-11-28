import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mek7lvb9u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yzoqmsbxj.css';
import '../../css/e/e93f6r9ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mek7lvb9u secondary"/><g class="dt0cm9dhy primary"><path class="yzoqmsbxj"/><path class="e93f6r9ct"/></g>`,
		"fallback": "iconaut:plane-landing-duo",
	});
}

export default Component;
