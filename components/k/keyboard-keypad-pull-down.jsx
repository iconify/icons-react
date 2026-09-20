import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ow1z-4b1j.css';
import '../../css/x/x9y_4rbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ow1z-4b1j"/><path class="x9y_4rbtb"/></g>`,
		"fallback": "streamline-freehand-color:keyboard-keypad-pull-down",
	});
}

export default Component;
