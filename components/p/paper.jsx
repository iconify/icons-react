import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_q7sqpql.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_q7sqpql"/>`,
		"fallback": "system-uicons:paper",
	});
}

export default Component;
