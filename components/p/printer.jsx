import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q6-yzqnbc.css';
import '../../css/t/t9k8-4bbd.css';
import '../../css/u/u2_1zacnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q6-yzqnbc"/><path class="t9k8-4bbd"/><path class="u2_1zacnl"/></g>`,
		"fallback": "iconaut:printer",
	});
}

export default Component;
