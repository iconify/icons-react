import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uce232brb.css';
import '../../css/q/qbc82_dwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uce232brb"/><path class="qbc82_dwa"/></g>`,
		"fallback": "solar:tennis-linear",
	});
}

export default Component;
