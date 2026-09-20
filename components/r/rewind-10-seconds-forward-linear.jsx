import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnv03wbox.css';
import '../../css/t/tgcis5bxj.css';
import '../../css/u/ulycb6b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fnv03wbox"/><path class="tgcis5bxj"/><path class="ulycb6b_n"/></g>`,
		"fallback": "solar:rewind-10-seconds-forward-linear",
	});
}

export default Component;
