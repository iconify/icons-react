import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u6ubhm--r.css';
import '../../css/o/ok9_wjole.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u6ubhm--r"/><path class="ok9_wjole"/></g>`,
		"fallback": "solar:shield-up-linear",
	});
}

export default Component;
