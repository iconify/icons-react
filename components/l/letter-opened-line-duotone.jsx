import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gmk9o9b1o.css';
import '../../css/i/irudeebhr.css';
import '../../css/k/k3sddyo-g.css';
import '../../css/j/jr2f22bmk.css';
import '../../css/q/qh-vgybrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gmk9o9b1o"/><path class="irudeebhr"/><path class="k3sddyo-g"/><path class="jr2f22bmk"/><path class="qh-vgybrh"/></g>`,
		"fallback": "solar:letter-opened-line-duotone",
	});
}

export default Component;
