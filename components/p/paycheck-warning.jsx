import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0bk-h96g.css';
import '../../css/y/yw-jeequa.css';
import '../../css/o/ohcj6h0gi.css';
import '../../css/y/y3fr6fb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0bk-h96g"/><path class="yw-jeequa"/><path class="ohcj6h0gi"/><path class="y3fr6fb-j"/></g>`,
		"fallback": "andrsrxn:paycheck-warning",
	});
}

export default Component;
