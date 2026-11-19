import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0bk-h96g.css';
import '../../css/a/adv34uxzq.css';
import '../../css/k/k1x1l-x6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0bk-h96g"/><path class="adv34uxzq"/><path class="k1x1l-x6p"/></g>`,
		"fallback": "andrsrxn:paycheck-minus",
	});
}

export default Component;
