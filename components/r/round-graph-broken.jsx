import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qfxoisp8j.css';
import '../../css/q/q2k_pybqv.css';
import '../../css/a/a09g2ehcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qfxoisp8j"/><path class="q2k_pybqv"/><path class="a09g2ehcd"/></g>`,
		"fallback": "solar:round-graph-broken",
	});
}

export default Component;
