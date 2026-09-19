import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zeg97qb-j.css';
import '../../css/x/x_inhdctp.css';
import '../../css/h/hv9uwxbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zeg97qb-j"/><path class="x_inhdctp"/><path class="hv9uwxbqy"/></g>`,
		"fallback": "hugeicons:spoon-and-knife",
	});
}

export default Component;
