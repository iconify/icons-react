import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fme7zr9sh.css';
import '../../css/k/k9mlok3zo.css';
import '../../css/n/n1cf0ubsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fme7zr9sh"/><path class="k9mlok3zo"/><path class="n1cf0ubsa"/></g>`,
		"fallback": "solar:paint-roller-line-duotone",
	});
}

export default Component;
