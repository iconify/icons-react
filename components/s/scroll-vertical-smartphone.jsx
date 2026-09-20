import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/atxnwab0s.css';
import '../../css/s/sl8qjtbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="atxnwab0s"/><path class="sl8qjtbxt"/></g>`,
		"fallback": "streamline-freehand-color:scroll-vertical-smartphone",
	});
}

export default Component;
