import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pw0lrkblz.css';
import '../../css/s/sgnmrzb-c.css';
import '../../css/q/qf74dob7w.css';
import '../../css/s/s0efqsb2d.css';
import '../../css/o/osnz66bni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pw0lrkblz"/><path clip-rule="evenodd" class="sgnmrzb-c"/><path clip-rule="evenodd" class="qf74dob7w"/><path class="s0efqsb2d"/><path clip-rule="evenodd" class="osnz66bni"/></g>`,
		"fallback": "healthicons:rural-post-outline",
	});
}

export default Component;
