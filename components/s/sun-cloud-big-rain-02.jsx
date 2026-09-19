import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nrka6qbcl.css';
import '../../css/c/clkta5wrk.css';
import '../../css/c/cns1e8f3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nrka6qbcl"/><path class="clkta5wrk"/><path class="cns1e8f3x"/></g>`,
		"fallback": "hugeicons:sun-cloud-big-rain-02",
	});
}

export default Component;
