import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pv6pnyb6o.css';
import '../../css/i/icuiavh2e.css';
import '../../css/k/kvxhi2erz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pv6pnyb6o"/><path class="icuiavh2e"/><path class="kvxhi2erz"/></g>`,
		"fallback": "hugeicons:invoice-03",
	});
}

export default Component;
