import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y40hbi6qp.css';
import '../../css/g/g12qyt31i.css';
import '../../css/j/j4qps2bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y40hbi6qp"/><path class="g12qyt31i wm-shadow"/><path class="j4qps2bou"/></g>`,
		"fallback": "withicons-brutal:plane-landing",
	});
}

export default Component;
