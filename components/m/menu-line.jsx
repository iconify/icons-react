import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzku5q1zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzku5q1zv"/>`,
		"fallback": "mingcute:menu-line",
	});
}

export default Component;
