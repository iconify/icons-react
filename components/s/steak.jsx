import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fl-r0ubyd.css';
import '../../css/v/vyxnsdbwc.css';
import '../../css/p/p5tdlubsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fl-r0ubyd"/><path class="vyxnsdbwc"/><path class="p5tdlubsu"/></g>`,
		"fallback": "hugeicons:steak",
	});
}

export default Component;
