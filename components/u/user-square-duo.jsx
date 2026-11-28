import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr1865n3b.css';
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
		"content": `<path class="secondary wr1865n3b"/><g class="dt0cm9dhy primary"><path class="mie31z6an"/><circle class="o-vq384-b"/><path class="f7x0orx7b"/></g>`,
		"fallback": "iconaut:user-square-duo",
	});
}

export default Component;
