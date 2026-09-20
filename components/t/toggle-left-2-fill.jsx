import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsdd1r8-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsdd1r8-q"/>`,
		"fallback": "mingcute:toggle-left-2-fill",
	});
}

export default Component;
