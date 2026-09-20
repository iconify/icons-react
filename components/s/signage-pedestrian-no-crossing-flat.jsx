import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o8xrx-b-q.css';
import '../../css/e/excgo1b4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o8xrx-b-q"/><path class="excgo1b4d"/></g>`,
		"fallback": "streamline-flex-color:signage-pedestrian-no-crossing-flat",
	});
}

export default Component;
