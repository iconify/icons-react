import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qgvmrn4vl.css';
import '../../css/e/e8-7aabla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qgvmrn4vl"/><path class="e8-7aabla"/></g>`,
		"fallback": "streamline-freehand-color:retract-shrink-arrow",
	});
}

export default Component;
