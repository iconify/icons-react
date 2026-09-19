import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yqzqx2b3s.css';
import '../../css/r/rri5j0bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yqzqx2b3s"/><path class="rri5j0bov"/></g>`,
		"fallback": "hugeicons:passport-expired",
	});
}

export default Component;
