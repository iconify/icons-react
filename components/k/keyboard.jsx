import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bfwzw2g-y.css';
import '../../css/r/r1v4xebvh.css';
import '../../css/r/ru3v0l07s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bfwzw2g-y"/><path class="r1v4xebvh"/><path class="ru3v0l07s"/></g>`,
		"fallback": "streamline-freehand-color:keyboard",
	});
}

export default Component;
