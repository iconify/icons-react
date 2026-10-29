import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eacle5s9s.css';
import '../../css/u/u0km1qbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eacle5s9s"/><path class="u0km1qbun wm-a"/></g>`,
		"fallback": "withicons:north-star",
	});
}

export default Component;
