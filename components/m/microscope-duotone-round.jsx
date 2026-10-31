import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtkey7b_q.css';
import '../../css/q/qgw9nm9bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wtkey7b_q"/><path class="qgw9nm9bj"/></g>`,
		"fallback": "coolicons:microscope-duotone-round",
	});
}

export default Component;
