import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ct6g40zug.css';
import '../../css/j/j7_supb0q.css';
import '../../css/j/jw8btwb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ct6g40zug"/><path clip-rule="evenodd" class="j7_supb0q"/><path class="jw8btwb9n"/></g>`,
		"fallback": "reicon:pin-school-filled",
	});
}

export default Component;
