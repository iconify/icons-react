import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w86377v7g.css';
import '../../css/i/i8yvbsg6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w86377v7g"/><path class="i8yvbsg6t"/></g>`,
		"fallback": "solar:notes-minimalistic-line-duotone",
	});
}

export default Component;
