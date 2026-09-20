import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fdw22_q0t.css';
import '../../css/y/y36etxydv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fdw22_q0t"/><path class="y36etxydv"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-biodegradable-1",
	});
}

export default Component;
