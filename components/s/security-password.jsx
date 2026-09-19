import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a5x3i0b3i.css';
import '../../css/n/n3_v003xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a5x3i0b3i"/><path class="n3_v003xz"/></g>`,
		"fallback": "hugeicons:security-password",
	});
}

export default Component;
