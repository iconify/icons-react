import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/muu-ienfh.css';
import '../../css/b/b_uypltgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="muu-ienfh"/><path class="b_uypltgp"/></g>`,
		"fallback": "solar:stars-2-linear",
	});
}

export default Component;
