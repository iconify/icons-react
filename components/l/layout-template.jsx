import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c_w8saclo.css';
import '../../css/t/txj5lrrof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c_w8saclo"/><path class="txj5lrrof wm-a"/></g>`,
		"fallback": "withicons:layout-template",
	});
}

export default Component;
