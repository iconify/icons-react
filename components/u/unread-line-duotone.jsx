import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yn6j5ab9x.css';
import '../../css/k/khe1-lrxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yn6j5ab9x"/><path class="khe1-lrxg"/></g>`,
		"fallback": "solar:unread-line-duotone",
	});
}

export default Component;
