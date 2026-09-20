import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jly_q426s.css';
import '../../css/b/b2a623bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jly_q426s"/><path class="b2a623bfq"/></g>`,
		"fallback": "solar:verified-check-broken",
	});
}

export default Component;
