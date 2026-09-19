import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mvelwbc-e.css';
import '../../css/k/kdezvqjnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mvelwbc-e"/><path class="kdezvqjnn"/></g>`,
		"fallback": "hugeicons:left-to-right-list-star-01",
	});
}

export default Component;
