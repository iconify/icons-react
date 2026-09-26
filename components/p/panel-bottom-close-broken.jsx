import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cr-zrxblb.css';
import '../../css/d/d4_j1ps6w.css';
import '../../css/g/gep1q1bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cr-zrxblb"/><path class="d4_j1ps6w"/><path class="gep1q1bhk"/></g>`,
		"fallback": "solar:panel-bottom-close-broken",
	});
}

export default Component;
