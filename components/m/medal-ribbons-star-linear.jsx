import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pfjefkbxt.css';
import '../../css/i/i6nrt8nnu.css';
import '../../css/r/rtsf20bbs.css';
import '../../css/b/bc8a__bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pfjefkbxt"/><path class="i6nrt8nnu"/><path class="rtsf20bbs"/><path class="bc8a__bpd"/></g>`,
		"fallback": "solar:medal-ribbons-star-linear",
	});
}

export default Component;
