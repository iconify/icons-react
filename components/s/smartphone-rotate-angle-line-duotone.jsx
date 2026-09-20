import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iyh26i1-m.css';
import '../../css/y/y7wqo0bjz.css';
import '../../css/y/y7ce83b9a.css';
import '../../css/a/ac1l4pbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iyh26i1-m"/><path class="y7wqo0bjz"/><path class="y7ce83b9a"/><path class="ac1l4pbcd"/></g>`,
		"fallback": "solar:smartphone-rotate-angle-line-duotone",
	});
}

export default Component;
