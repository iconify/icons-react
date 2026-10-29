import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/okp7pp4nk.css';
import '../../css/y/yl7a92tqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="okp7pp4nk wm-s"/><path class="yl7a92tqe"/></g>`,
		"fallback": "withicons:list-minus-duo",
	});
}

export default Component;
