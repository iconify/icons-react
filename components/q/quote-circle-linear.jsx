import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-3-7paba.css';
import '../../css/w/wibax0b3j.css';
import '../../css/g/gq5aw9s1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z-3-7paba"/><path class="wibax0b3j"/><path class="gq5aw9s1b"/></g>`,
		"fallback": "solar:quote-circle-linear",
	});
}

export default Component;
