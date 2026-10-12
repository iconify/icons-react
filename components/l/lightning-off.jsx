import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xv3i7ac0v.css';
import '../../css/u/ux5m53fae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xv3i7ac0v"/><path class="ux5m53fae"/></g>`,
		"fallback": "andrsrxn:lightning-off",
	});
}

export default Component;
