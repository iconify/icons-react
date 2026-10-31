import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fkljh8brr.css';
import '../../css/e/eu6bm9bhp.css';
import '../../css/j/ji8nwkjyq.css';
import '../../css/z/zvfvkwbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fkljh8brr wm-shadow"/><path class="eu6bm9bhp"/><path class="ji8nwkjyq"/><path class="zvfvkwbdz"/></g>`,
		"fallback": "withicons-retro:sun-moon",
	});
}

export default Component;
