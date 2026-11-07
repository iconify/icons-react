import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/du-5mnkon.css';
import '../../css/h/h9m_d1bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="du-5mnkon"/><path class="h9m_d1bnc"/></g>`,
		"fallback": "solar:streets-linear",
	});
}

export default Component;
