import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ckbwmibsq.css';
import '../../css/n/njzclob-l.css';
import '../../css/w/w_5s4mbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ckbwmibsq"/><path class="njzclob-l"/><path class="w_5s4mbtp"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-line-duotone",
	});
}

export default Component;
