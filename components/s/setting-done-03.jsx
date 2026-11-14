import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jt5m02bmy.css';
import '../../css/d/dt11htbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jt5m02bmy"/><path class="dt11htbqm"/></g>`,
		"fallback": "hugeicons:setting-done-03",
	});
}

export default Component;
