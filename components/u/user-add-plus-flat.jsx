import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6-q1qa5q.css';
import '../../css/n/npkzd0bom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6-q1qa5q"/><path clip-rule="evenodd" class="npkzd0bom"/></g>`,
		"fallback": "streamline-color:user-add-plus-flat",
	});
}

export default Component;
