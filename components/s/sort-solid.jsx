import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/qpd-0ubsd.css';
import '../../css/u/u0pjq9c3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="qpd-0ubsd"/><path class="u0pjq9c3f"/></g>`,
		"fallback": "flowbite:sort-solid",
	});
}

export default Component;
