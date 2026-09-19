import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c82kzvb0x.css';
import '../../css/z/zzl0hmbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c82kzvb0x"/><path class="zzl0hmbdb"/></g>`,
		"fallback": "hugeicons:letter-spacing",
	});
}

export default Component;
