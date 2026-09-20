import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ki-7--bfm.css';
import '../../css/x/xm-5mfkph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ki-7--bfm"/><path class="xm-5mfkph"/></g>`,
		"fallback": "solar:plain-2-linear",
	});
}

export default Component;
