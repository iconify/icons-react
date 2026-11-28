import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ce9qpex.css';
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
		"content": `<path class="e7ce9qpex secondary"/><g class="dt0cm9dhy primary"><path class="t0ut8sbjx"/><path class="iayx1qbsp"/></g>`,
		"fallback": "iconaut:star-off-duo",
	});
}

export default Component;
