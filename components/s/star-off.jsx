import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0ut8sbjx.css';
import '../../css/i/iayx1qbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t0ut8sbjx"/><path class="iayx1qbsp"/></g>`,
		"fallback": "iconaut:star-off",
	});
}

export default Component;
