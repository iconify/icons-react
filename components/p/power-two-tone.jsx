import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/dnjmyosxc.css';
import '../../css/k/kcrtoqb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="dnjmyosxc"/><path class="kcrtoqb_y"/></g>`,
		"fallback": "keyline-icons:power-two-tone",
	});
}

export default Component;
