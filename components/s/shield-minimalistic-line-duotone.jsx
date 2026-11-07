import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k_9yvrb1q.css';
import '../../css/j/jtnup6gsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k_9yvrb1q"/><path class="jtnup6gsa"/></g>`,
		"fallback": "solar:shield-minimalistic-line-duotone",
	});
}

export default Component;
