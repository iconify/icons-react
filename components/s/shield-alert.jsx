import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l23rffbue.css';
import '../../css/l/lclw01bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l23rffbue"/><path class="lclw01bqc"/></g>`,
		"fallback": "hugeicons:shield-alert",
	});
}

export default Component;
