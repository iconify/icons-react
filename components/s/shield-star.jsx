import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g50i_yb_j.css';
import '../../css/o/o784y1sot.css';
import '../../css/w/wuik6qlrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g50i_yb_j"/><path class="o784y1sot"/><path class="wuik6qlrs"/></g>`,
		"fallback": "andrsrxn:shield-star",
	});
}

export default Component;
