import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3zeogctc.css';
import '../../css/k/k_k89z8xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3zeogctc"/><path class="k_k89z8xq"/></g>`,
		"fallback": "coolicons:rocket-duotone-round",
	});
}

export default Component;
