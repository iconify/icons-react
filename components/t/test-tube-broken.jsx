import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q_lv9ibgq.css';
import '../../css/a/acq305-ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q_lv9ibgq"/><path class="acq305-ns"/></g>`,
		"fallback": "solar:test-tube-broken",
	});
}

export default Component;
