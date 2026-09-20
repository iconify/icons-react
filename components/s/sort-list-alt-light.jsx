import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjq9ib_1y.css';
import '../../css/j/j122t5b1j.css';
import '../../css/m/myzrsybmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mjq9ib_1y"/><path class="j122t5b1j"/><path class="myzrsybmq"/></g>`,
		"fallback": "lets-icons:sort-list-alt-light",
	});
}

export default Component;
