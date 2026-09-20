import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3jogvtxu.css';
import '../../css/k/kzjab8bcu.css';
import '../../css/f/f5ay05zjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l3jogvtxu"/><path class="kzjab8bcu"/><circle class="f5ay05zjp"/></g>`,
		"fallback": "solar:smartphone-2-broken",
	});
}

export default Component;
