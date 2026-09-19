import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c07ilhbot.css';
import '../../css/z/z47uxdb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c07ilhbot"/><path class="z47uxdb9v"/></g>`,
		"fallback": "hugeicons:sun-cloud-02",
	});
}

export default Component;
