import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aryt0yb9v.css';
import '../../css/s/sqd6crbma.css';
import '../../css/k/kscok8bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="aryt0yb9v"/><path class="sqd6crbma"/><path class="kscok8bte"/></g>`,
		"fallback": "andrsrxn:timer-reload",
	});
}

export default Component;
