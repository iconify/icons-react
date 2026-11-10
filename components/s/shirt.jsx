import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy961nljj.css';
import '../../css/t/ti0e6cckd.css';
import '../../css/l/lj2y1nopb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sy961nljj"/><path class="ti0e6cckd"/><path class="lj2y1nopb"/></g>`,
		"fallback": "andrsrxn:shirt",
	});
}

export default Component;
