import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nhha8666g.css';
import '../../css/o/opw7_nbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nhha8666g"/><path class="opw7_nbkl"/></g>`,
		"fallback": "hugeicons:tv-01",
	});
}

export default Component;
