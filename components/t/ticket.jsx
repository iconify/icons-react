import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/upcn0ppde.css';
import '../../css/t/tja3t5jyn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="upcn0ppde"/><path class="tja3t5jyn"/></g>`,
		"fallback": "marketeq:ticket",
	});
}

export default Component;
