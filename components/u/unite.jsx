import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehvsuwb6d.css';
import '../../css/v/v2ns84bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ehvsuwb6d"/><path class="v2ns84bkf"/></g>`,
		"fallback": "andrsrxn:unite",
	});
}

export default Component;
