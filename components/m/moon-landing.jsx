import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kp4sgbfpe.css';
import '../../css/i/iqamq8bdl.css';
import '../../css/y/y6ovjwbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kp4sgbfpe"/><path class="iqamq8bdl"/><path class="y6ovjwbid"/></g>`,
		"fallback": "hugeicons:moon-landing",
	});
}

export default Component;
