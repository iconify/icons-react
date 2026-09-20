import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e9j9ugp6z.css';
import '../../css/n/nwv-qhbhl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e9j9ugp6z"/><path class="nwv-qhbhl"/></g>`,
		"fallback": "streamline-color:rainbow-flat",
	});
}

export default Component;
