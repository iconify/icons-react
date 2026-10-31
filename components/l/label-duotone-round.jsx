import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmax9qbge.css';
import '../../css/q/qd8o_zwqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nmax9qbge"/><path class="qd8o_zwqb"/></g>`,
		"fallback": "coolicons:label-duotone-round",
	});
}

export default Component;
