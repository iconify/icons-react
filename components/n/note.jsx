import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u68blzbuz.css';
import '../../css/i/ik2yqlbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u68blzbuz"/><path class="ik2yqlbbc"/></g>`,
		"fallback": "hugeicons:note",
	});
}

export default Component;
