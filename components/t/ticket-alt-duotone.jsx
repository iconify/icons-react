import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr9at6j2e.css';
import '../../css/h/h41y--f1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tr9at6j2e"/><path class="h41y--f1j"/></g>`,
		"fallback": "lets-icons:ticket-alt-duotone",
	});
}

export default Component;
