import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6p5u_znv.css';
import '../../css/j/j8d6owb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f6p5u_znv"/><path class="j8d6owb_b"/></g>`,
		"fallback": "reicon:shield-tick",
	});
}

export default Component;
