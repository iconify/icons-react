import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/up2zq7bnn.css';
import '../../css/f/f9qyrhqlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="up2zq7bnn"/><path class="f9qyrhqlz"/></g>`,
		"fallback": "iconaut:messages-square",
	});
}

export default Component;
