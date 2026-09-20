import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/ryy50hzgq.css';
import '../../css/u/uksfom2lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ryy50hzgq"/><path class="uksfom2lp"/></g>`,
		"fallback": "lets-icons:roll",
	});
}

export default Component;
