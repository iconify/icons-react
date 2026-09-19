import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_ocl7bux.css';
import '../../css/o/o5vr09bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q_ocl7bux"/><path class="o5vr09bii"/></g>`,
		"fallback": "hugeicons:mouse-17",
	});
}

export default Component;
