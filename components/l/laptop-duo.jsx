import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zccxc2biv.css';
import '../../css/f/fcqp69bgt.css';
import '../../css/p/pf9cqzq4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zccxc2biv"/><path class="fcqp69bgt wm-a"/><path class="pf9cqzq4q"/></g>`,
		"fallback": "withicons:laptop-duo",
	});
}

export default Component;
