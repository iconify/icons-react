import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0utzebhl.css';
import '../../css/k/kad91obhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n0utzebhl"/><path class="kad91obhl"/></g>`,
		"fallback": "streamline-freehand-color:layouts-content",
	});
}

export default Component;
