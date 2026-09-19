import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbosd6jfr.css';
import '../../css/s/syzhcob7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qbosd6jfr"/><path class="syzhcob7n"/></g>`,
		"fallback": "cryptocurrency-color:snx",
	});
}

export default Component;
