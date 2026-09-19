import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/djzqxd3wg.css';
import '../../css/s/sdu3pmbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="djzqxd3wg"/><path class="sdu3pmbta"/></g>`,
		"fallback": "hugeicons:square-lock-check-02",
	});
}

export default Component;
