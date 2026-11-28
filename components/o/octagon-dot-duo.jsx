import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo5zm0b2e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uxfqx7b8a.css';
import '../../css/l/lavl0lbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo5zm0b2e secondary"/><g class="dt0cm9dhy primary"><path class="uxfqx7b8a"/><path class="lavl0lbcq"/></g>`,
		"fallback": "iconaut:octagon-dot-duo",
	});
}

export default Component;
