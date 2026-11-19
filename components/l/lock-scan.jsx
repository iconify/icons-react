import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drica-lqr.css';
import '../../css/a/a24f15b1b.css';
import '../../css/z/zpt5ytb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="drica-lqr"/><path class="a24f15b1b"/><path clip-rule="evenodd" class="zpt5ytb6g"/></g>`,
		"fallback": "andrsrxn:lock-scan",
	});
}

export default Component;
