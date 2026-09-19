import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ryg37jbhz.css';
import '../../css/y/y3hguvblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ryg37jbhz"/><path class="y3hguvblu"/></g>`,
		"fallback": "hugeicons:medicine-syrup",
	});
}

export default Component;
