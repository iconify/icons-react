import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ipvt5f9ii.css';
import '../../css/r/ri0654i4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ipvt5f9ii"/><path class="ri0654i4u"/></g>`,
		"fallback": "iconoir:svg-format",
	});
}

export default Component;
