import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c3buh4fbk.css';
import '../../css/p/pdyvfubiy.css';
import '../../css/d/d_tqh4qme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c3buh4fbk"/><path class="pdyvfubiy"/><path class="d_tqh4qme"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-unlocked-linear",
	});
}

export default Component;
