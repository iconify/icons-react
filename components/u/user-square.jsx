import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/o/o-vq384-b.css';
import '../../css/f/f7x0orx7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mie31z6an"/><circle class="o-vq384-b"/><path class="f7x0orx7b"/></g>`,
		"fallback": "iconaut:user-square",
	});
}

export default Component;
