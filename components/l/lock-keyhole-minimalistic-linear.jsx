import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c3buh4fbk.css';
import '../../css/d/d_tqh4qme.css';
import '../../css/x/xax-53bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c3buh4fbk"/><path class="d_tqh4qme"/><path class="xax-53bab"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-linear",
	});
}

export default Component;
