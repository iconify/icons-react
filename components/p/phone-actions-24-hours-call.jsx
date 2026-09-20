import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jtr00rbfz.css';
import '../../css/p/pzxu--v0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jtr00rbfz"/><path class="pzxu--v0y"/></g>`,
		"fallback": "streamline-freehand-color:phone-actions-24-hours-call",
	});
}

export default Component;
