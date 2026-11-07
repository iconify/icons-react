import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pzqlz6blu.css';
import '../../css/r/ro7gb9b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pzqlz6blu"/><path class="ro7gb9b3j"/></g>`,
		"fallback": "solar:satellite-line-duotone",
	});
}

export default Component;
