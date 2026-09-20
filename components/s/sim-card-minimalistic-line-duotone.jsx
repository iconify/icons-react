import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orqtdgb5k.css';
import '../../css/n/ng4iaeywv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="orqtdgb5k"/><path class="ng4iaeywv"/></g>`,
		"fallback": "solar:sim-card-minimalistic-line-duotone",
	});
}

export default Component;
