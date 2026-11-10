import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsmt9qbgq.css';
import '../../css/n/njswtnv8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jsmt9qbgq"/><path class="njswtnv8d"/></g>`,
		"fallback": "andrsrxn:luggage",
	});
}

export default Component;
