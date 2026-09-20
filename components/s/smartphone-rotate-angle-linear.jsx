import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzjab8bcu.css';
import '../../css/s/src5g-5zv.css';
import '../../css/a/ac1l4pbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kzjab8bcu"/><path class="src5g-5zv"/><path class="ac1l4pbcd"/></g>`,
		"fallback": "solar:smartphone-rotate-angle-linear",
	});
}

export default Component;
