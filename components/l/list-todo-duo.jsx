import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y5gtsacia.css';
import '../../css/b/b2_xccbks.css';
import '../../css/f/fyx95nbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm-a y5gtsacia"/><path class="b2_xccbks"/><path class="fyx95nbgx wm-a"/></g>`,
		"fallback": "withicons:list-todo-duo",
	});
}

export default Component;
