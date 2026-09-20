import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgy-6rbgh.css';
import '../../css/d/dr6ywvblz.css';
import '../../css/y/y94j8l0lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hgy-6rbgh"/><path class="dr6ywvblz"/><path class="y94j8l0lc"/></g>`,
		"fallback": "solar:laptop-minimalistic-line-duotone",
	});
}

export default Component;
