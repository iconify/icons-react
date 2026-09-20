import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtq2_03hp.css';
import '../../css/p/pev47bcdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dtq2_03hp"/><path class="pev47bcdt"/></g>`,
		"fallback": "solar:waterdrop-linear",
	});
}

export default Component;
