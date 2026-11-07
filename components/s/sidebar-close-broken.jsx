import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w434_tbtm.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/m/m0ij-vkdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w434_tbtm"/><path class="ml0cb1b5h"/><path class="m0ij-vkdi"/></g>`,
		"fallback": "solar:sidebar-close-broken",
	});
}

export default Component;
