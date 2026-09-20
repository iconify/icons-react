import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eng5q6rra.css';
import '../../css/f/fw8wbsbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eng5q6rra"/><path class="fw8wbsbwi"/></g>`,
		"fallback": "streamline-freehand-color:notes-paper",
	});
}

export default Component;
