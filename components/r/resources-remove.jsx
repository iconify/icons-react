import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jko4vwbbq.css';
import '../../css/o/okg5sbcuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jko4vwbbq"/><path class="okg5sbcuc"/></g>`,
		"fallback": "hugeicons:resources-remove",
	});
}

export default Component;
