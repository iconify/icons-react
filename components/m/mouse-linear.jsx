import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yb8gbubnt.css';
import '../../css/i/i5p1eqb6p.css';
import '../../css/g/glahfmzew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yb8gbubnt"/><path class="i5p1eqb6p"/><path class="glahfmzew"/></g>`,
		"fallback": "solar:mouse-linear",
	});
}

export default Component;
