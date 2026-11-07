import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tga2ah5dh.css';
import '../../css/r/rt04sjrmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tga2ah5dh"/><path class="rt04sjrmi"/></g>`,
		"fallback": "solar:ruler-cross-pen-linear",
	});
}

export default Component;
