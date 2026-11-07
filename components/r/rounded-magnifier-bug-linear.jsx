import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qh-3y5b_g.css';
import '../../css/q/qn-0a-fjj.css';
import '../../css/y/yewbpls5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="qh-3y5b_g"/><path class="qn-0a-fjj"/><path class="yewbpls5v"/></g>`,
		"fallback": "solar:rounded-magnifier-bug-linear",
	});
}

export default Component;
