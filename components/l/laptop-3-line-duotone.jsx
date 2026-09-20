import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdrgl9b8d.css';
import '../../css/d/dmks4cbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdrgl9b8d"/><path class="dmks4cbtk"/></g>`,
		"fallback": "solar:laptop-3-line-duotone",
	});
}

export default Component;
