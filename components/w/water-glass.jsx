import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpnaedvsj.css';
import '../../css/y/ypzhaybhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kpnaedvsj"/><path class="ypzhaybhn"/></g>`,
		"fallback": "iconaut:water-glass",
	});
}

export default Component;
