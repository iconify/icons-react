import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/n/nbzr46bna.css';
import '../../css/j/jw1kjlzwx.css';
import '../../css/y/y-275v1vl.css';
import '../../css/h/hu33ufrcx.css';
import '../../css/o/o1q4qwg7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="nbzr46bna"/><path class="jw1kjlzwx"/><path class="y-275v1vl"/><path class="hu33ufrcx"/><path class="o1q4qwg7n"/></g>`,
		"fallback": "withicons-retro:shield",
	});
}

export default Component;
