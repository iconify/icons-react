import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0ek0fbrj.css';
import '../../css/i/ib3smojya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0ek0fbrj"/><path class="ib3smojya"/></g>`,
		"fallback": "hugeicons:square-arrow-out-down-left",
	});
}

export default Component;
