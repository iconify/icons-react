import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_weggkyg.css';
import '../../css/o/onzqwfb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_weggkyg"/><path class="onzqwfb_h"/></g>`,
		"fallback": "andrsrxn:stroke-end-point-round",
	});
}

export default Component;
