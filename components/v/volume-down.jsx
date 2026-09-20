import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qk4dadbet.css';
import '../../css/y/yn5jw2bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qk4dadbet"/><path class="yn5jw2bvn"/></g>`,
		"fallback": "mage:volume-down",
	});
}

export default Component;
