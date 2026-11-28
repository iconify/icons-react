import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw8cl4aju.css';
import '../../css/q/qlscqubky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yw8cl4aju"/><path class="qlscqubky"/></g>`,
		"fallback": "iconaut:rotate-cw-duo",
	});
}

export default Component;
