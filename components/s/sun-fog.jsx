import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-tpqjtqa.css';
import '../../css/m/m4t5wlb6j.css';
import '../../css/k/ko27go6yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-tpqjtqa"/><circle class="m4t5wlb6j"/><path class="ko27go6yv"/></g>`,
		"fallback": "andrsrxn:sun-fog",
	});
}

export default Component;
