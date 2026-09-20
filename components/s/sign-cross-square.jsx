import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrk74_bnb.css';
import '../../css/k/k6m4-x72j.css';
import '../../css/q/q_6j7w3aq.css';
import '../../css/q/qnuvpv2ip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rrk74_bnb"/><path class="k6m4-x72j"/><path class="q_6j7w3aq"/><path class="qnuvpv2ip"/></g>`,
		"fallback": "streamline-color:sign-cross-square",
	});
}

export default Component;
