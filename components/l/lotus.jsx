import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qzh-o1jaa.css';
import '../../css/q/q_w-6ubgj.css';
import '../../css/j/j2lbs9bwb.css';
import '../../css/j/jmyjil-9j.css';
import '../../css/h/hloc2bbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qzh-o1jaa wm-shadow"/><path class="q_w-6ubgj"/><path class="j2lbs9bwb"/><path class="jmyjil-9j"/><path class="hloc2bbpw wm-s"/></g>`,
		"fallback": "withicons-retro:lotus",
	});
}

export default Component;
