import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvp_-dbaj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yalzx3b5b.css';
import '../../css/e/eqp5nccdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yvp_-dbaj"/><g class="dt0cm9dhy primary"><path class="yalzx3b5b"/><path class="eqp5nccdq"/></g>`,
		"fallback": "iconaut:skip-forward-duo",
	});
}

export default Component;
