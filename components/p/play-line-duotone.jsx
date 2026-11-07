import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ax4s8jbop.css';
import '../../css/f/fp_9ml1tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ax4s8jbop"/><path class="fp_9ml1tn"/></g>`,
		"fallback": "solar:play-line-duotone",
	});
}

export default Component;
