import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn2ogq_7k.css';
import '../../css/n/nyagzdb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pn2ogq_7k"/><path class="nyagzdb8y"/></g>`,
		"fallback": "mingcute:loading-2-fill",
	});
}

export default Component;
