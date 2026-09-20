import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcx4chtat.css';
import '../../css/p/pvhpxrbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcx4chtat"/><path class="pvhpxrbgo"/></g>`,
		"fallback": "solar:pen-new-round-broken",
	});
}

export default Component;
