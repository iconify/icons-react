import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u5fiq0e0a.css';
import '../../css/e/ebpntvbiw.css';
import '../../css/q/q_s4rbbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u5fiq0e0a"/><path class="ebpntvbiw"/><path class="q_s4rbbpt"/></g>`,
		"fallback": "iconoir:user-square-alt",
	});
}

export default Component;
