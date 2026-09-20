import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a80bplbnc.css';
import '../../css/m/mfqkwzbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a80bplbnc"/><path class="mfqkwzbze"/></g>`,
		"fallback": "solar:route-linear",
	});
}

export default Component;
