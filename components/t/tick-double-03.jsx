import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j9wgljb1y.css';
import '../../css/n/n2t8cvw6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j9wgljb1y"/><path class="n2t8cvw6v"/></g>`,
		"fallback": "hugeicons:tick-double-03",
	});
}

export default Component;
