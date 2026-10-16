import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm8cqcb_j.css';
import '../../css/s/sk-a0ybqd.css';
import '../../css/d/ds88zty-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cm8cqcb_j"/><path class="sk-a0ybqd"/><path class="ds88zty-t"/></g>`,
		"fallback": "andrsrxn:pendulum",
	});
}

export default Component;
