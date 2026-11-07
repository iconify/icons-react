import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hjo_5101c.css';
import '../../css/u/ucfzn8qnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hjo_5101c"/><path class="ucfzn8qnj"/></g>`,
		"fallback": "solar:key-line-duotone",
	});
}

export default Component;
