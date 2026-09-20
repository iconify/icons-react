import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f5it76b6q.css';
import '../../css/f/fd0dypbjk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f5it76b6q"/><path class="fd0dypbjk"/></g>`,
		"fallback": "streamline-color:shield-check-flat",
	});
}

export default Component;
