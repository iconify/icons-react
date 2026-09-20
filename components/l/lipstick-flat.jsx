import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i5tuikr3e.css';
import '../../css/r/ryb1_94xm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i5tuikr3e"/><path class="ryb1_94xm"/></g>`,
		"fallback": "streamline-plump-color:lipstick-flat",
	});
}

export default Component;
