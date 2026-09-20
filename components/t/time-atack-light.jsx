import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr5jwubmh.css';
import '../../css/q/qvk9dqekr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dr5jwubmh"/><circle class="qvk9dqekr"/></g>`,
		"fallback": "lets-icons:time-atack-light",
	});
}

export default Component;
