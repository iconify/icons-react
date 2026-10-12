import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lowbit6ib.css';
import '../../css/r/rd323vl1n.css';
import '../../css/q/q_3utft2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lowbit6ib"/><circle transform="rotate(60 11.85 11.11)" class="rd323vl1n"/><path class="q_3utft2m"/></g>`,
		"fallback": "andrsrxn:radiation",
	});
}

export default Component;
