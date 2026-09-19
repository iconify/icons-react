import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j5ryysb0v.css';
import '../../css/w/wccisyhhx.css';
import '../../css/g/gupjygfja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j5ryysb0v"/><path class="wccisyhhx"/><path class="gupjygfja"/></g>`,
		"fallback": "hugeicons:party-popper",
	});
}

export default Component;
