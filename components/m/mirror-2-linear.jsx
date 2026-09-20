import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/feizqrl2n.css';
import '../../css/y/yr_co9bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="feizqrl2n"/><path class="yr_co9bxk"/></g>`,
		"fallback": "solar:mirror-2-linear",
	});
}

export default Component;
