import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/rgyr606zo.css';
import '../../css/c/c0h0dibhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="rgyr606zo"/><path class="c0h0dibhs"/></g>`,
		"fallback": "keyline-icons:refresh-ccw-duotone",
	});
}

export default Component;
