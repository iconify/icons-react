import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nv9jmsbsf.css';
import '../../css/b/brep-6dac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nv9jmsbsf"/><path class="brep-6dac"/></g>`,
		"fallback": "hugeicons:nut",
	});
}

export default Component;
