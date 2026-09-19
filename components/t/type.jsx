import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ol8rgfhph.css';
import '../../css/y/ylkpx26zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ol8rgfhph"/><path class="ylkpx26zu"/></g>`,
		"fallback": "hugeicons:type",
	});
}

export default Component;
