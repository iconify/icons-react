import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yghc4cc4c.css';
import '../../css/o/ozd0-acrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yghc4cc4c"/><path class="ozd0-acrl"/></g>`,
		"fallback": "solar:rolling-pin-line-duotone",
	});
}

export default Component;
