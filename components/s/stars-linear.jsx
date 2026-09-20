import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s1xptwehe.css';
import '../../css/m/mow4xc1lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s1xptwehe"/><path class="mow4xc1lj"/></g>`,
		"fallback": "solar:stars-linear",
	});
}

export default Component;
