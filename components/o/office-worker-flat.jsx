import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cyidu64ym.css';
import '../../css/u/usromyj0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cyidu64ym"/><path class="usromyj0b"/></g>`,
		"fallback": "streamline-color:office-worker-flat",
	});
}

export default Component;
