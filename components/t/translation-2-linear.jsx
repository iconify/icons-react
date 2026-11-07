import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ehz7_oblv.css';
import '../../css/q/qds604bnv.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/r/rww_ujanv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ehz7_oblv"/><path class="qds604bnv"/><circle class="h_tsn8bxt"/><path class="rww_ujanv"/></g>`,
		"fallback": "solar:translation-2-linear",
	});
}

export default Component;
