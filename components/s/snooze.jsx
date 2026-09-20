import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j3x2t6bon.css';
import '../../css/d/d_0bx4bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j3x2t6bon"/><path class="d_0bx4bql"/></g>`,
		"fallback": "streamline-sharp:snooze",
	});
}

export default Component;
