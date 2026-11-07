import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/asw3fob5g.css';
import '../../css/t/tejdowbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="asw3fob5g"/><path class="tejdowbrb"/></g>`,
		"fallback": "solar:notes-minimalistic-linear",
	});
}

export default Component;
