import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eltrv1bjv.css';
import '../../css/q/qhm_c-bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eltrv1bjv"/><path class="qhm_c-bql"/></g>`,
		"fallback": "hugeicons:move-up",
	});
}

export default Component;
