import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_6xkebub.css';
import '../../css/j/jwqjkwblo.css';
import '../../css/q/q_39cac5q.css';
import '../../css/o/oos9ecbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_6xkebub"/><path class="jwqjkwblo"/><path class="q_39cac5q"/><path class="oos9ecbte"/></g>`,
		"fallback": "streamline-ultimate-color:receipt-dollar",
	});
}

export default Component;
