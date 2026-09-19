import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvqu75bgc.css';
import '../../css/r/r46z43bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jvqu75bgc"/><path class="r46z43bxj"/></g>`,
		"fallback": "iconoir:u-turn-arrow-right",
	});
}

export default Component;
