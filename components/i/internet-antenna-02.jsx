import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/s/s4v36abdu.css';
import '../../css/p/pmrv7nbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="s4v36abdu"/><path class="pmrv7nbco"/></g>`,
		"fallback": "hugeicons:internet-antenna-02",
	});
}

export default Component;
