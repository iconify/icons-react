import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c3buh4fbk.css';
import '../../css/e/e2t_fbj3i.css';
import '../../css/c/ct1wj-9ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c3buh4fbk"/><path class="e2t_fbj3i"/><path class="ct1wj-9ig"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-unlocked-line-duotone",
	});
}

export default Component;
