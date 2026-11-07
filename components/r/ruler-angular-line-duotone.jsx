import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sb0q3diim.css';
import '../../css/t/t3i0929hw.css';
import '../../css/n/noowh5fsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sb0q3diim"/><path class="t3i0929hw"/><path class="noowh5fsj"/></g>`,
		"fallback": "solar:ruler-angular-line-duotone",
	});
}

export default Component;
