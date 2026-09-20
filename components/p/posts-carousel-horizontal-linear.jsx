import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ckbwmibsq.css';
import '../../css/c/c6ojcpbik.css';
import '../../css/t/t6t3twame.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ckbwmibsq"/><path class="c6ojcpbik"/><path class="t6t3twame"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-linear",
	});
}

export default Component;
