import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kju349eii.css';
import '../../css/q/qwl3_r7lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kju349eii"/><path class="qwl3_r7lb"/></g>`,
		"fallback": "solar:plane-3-broken",
	});
}

export default Component;
