import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yqmd62nin.css';
import '../../css/d/d3cs6vbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yqmd62nin"/><path class="d3cs6vbyd"/></g>`,
		"fallback": "hugeicons:link-circle",
	});
}

export default Component;
