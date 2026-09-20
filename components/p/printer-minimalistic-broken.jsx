import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mmq6zvbgf.css';
import '../../css/k/k8mwp_zry.css';
import '../../css/f/fg9hpm71u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mmq6zvbgf"/><path class="k8mwp_zry"/><path class="fg9hpm71u"/></g>`,
		"fallback": "solar:printer-minimalistic-broken",
	});
}

export default Component;
