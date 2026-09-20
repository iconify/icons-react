import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvs1ozbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jvs1ozbej"/>`,
		"fallback": "mingcute:statue-of-liberty-fill",
	});
}

export default Component;
