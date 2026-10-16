import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvhdzxb8g.css';
import '../../css/t/t0ziotbzt.css';
import '../../css/t/tzr9dnbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="uvhdzxb8g"/><rect class="t0ziotbzt"/><path class="tzr9dnbwb"/></g>`,
		"fallback": "andrsrxn:video-filled",
	});
}

export default Component;
