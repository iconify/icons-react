import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cbal9c-es.css';
import '../../css/u/u1xashbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cbal9c-es"/><path class="u1xashbhl"/></g>`,
		"fallback": "hugeicons:system-update-01",
	});
}

export default Component;
