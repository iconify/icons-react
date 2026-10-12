import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg8zubh1l.css';
import '../../css/l/lb525wy8y.css';
import '../../css/s/sx9r5_bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wg8zubh1l"/><path class="lb525wy8y"/><path class="sx9r5_bwg"/></g>`,
		"fallback": "andrsrxn:shopping-bag-plus",
	});
}

export default Component;
