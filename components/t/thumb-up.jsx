import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/v/v072edbiz.css';
import '../../css/i/i1yxb9_jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="v072edbiz"/><path class="i1yxb9_jm"/></g>`,
		"fallback": "lets-icons:thumb-up",
	});
}

export default Component;
