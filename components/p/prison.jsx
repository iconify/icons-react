import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thmnoru9g.css';
import '../../css/j/j6qvhabrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="thmnoru9g"/><path class="j6qvhabrr"/></g>`,
		"fallback": "andrsrxn:prison",
	});
}

export default Component;
