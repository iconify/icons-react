import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w60dvzbin.css';
import '../../css/v/vn6b17lwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w60dvzbin"/><path class="vn6b17lwl"/></g>`,
		"fallback": "hugeicons:picture-in-picture-01",
	});
}

export default Component;
