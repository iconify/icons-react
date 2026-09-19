import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_2b0vb0m.css';
import '../../css/j/j3pf-l97n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_2b0vb0m"/><circle class="j3pf-l97n"/>`,
		"fallback": "circum:pizza",
	});
}

export default Component;
