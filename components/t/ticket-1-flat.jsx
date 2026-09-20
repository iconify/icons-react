import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g4tx_2bgg.css';
import '../../css/e/e3z3grbba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g4tx_2bgg"/><path class="e3z3grbba"/></g>`,
		"fallback": "streamline-color:ticket-1-flat",
	});
}

export default Component;
