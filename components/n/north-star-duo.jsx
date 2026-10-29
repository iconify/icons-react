import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qdf8anb8y.css';
import '../../css/u/u0km1qbun.css';
import '../../css/e/eacle5s9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qdf8anb8y"/><path class="u0km1qbun wm-a"/><path class="eacle5s9s"/></g>`,
		"fallback": "withicons:north-star-duo",
	});
}

export default Component;
