import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntmu-wsly.css';
import '../../css/k/k011rpb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ntmu-wsly"/><path class="k011rpb7m"/></g>`,
		"fallback": "andrsrxn:playing-heart",
	});
}

export default Component;
