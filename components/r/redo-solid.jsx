import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/okpem58dw.css';
import '../../css/v/vmew9sbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="okpem58dw"/><path class="vmew9sbaa"/></g>`,
		"fallback": "flowbite:redo-solid",
	});
}

export default Component;
