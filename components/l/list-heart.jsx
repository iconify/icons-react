import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn2w_jp1t.css';
import '../../css/c/c0p1l1bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fn2w_jp1t"/><path class="c0p1l1bjv"/></g>`,
		"fallback": "andrsrxn:list-heart",
	});
}

export default Component;
