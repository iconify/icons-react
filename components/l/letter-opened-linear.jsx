import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/npj8504fz.css';
import '../../css/i/irudeebhr.css';
import '../../css/k/k3sddyo-g.css';
import '../../css/c/c0n21jbpg.css';
import '../../css/q/qh-vgybrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="npj8504fz"/><path class="irudeebhr"/><path class="k3sddyo-g"/><path class="c0n21jbpg"/><path class="qh-vgybrh"/></g>`,
		"fallback": "solar:letter-opened-linear",
	});
}

export default Component;
