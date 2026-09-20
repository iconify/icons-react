import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/ws3k3ubzr.css';
import '../../css/d/drv_5o1ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ws3k3ubzr"/><path class="drv_5o1ha"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-bullets",
	});
}

export default Component;
