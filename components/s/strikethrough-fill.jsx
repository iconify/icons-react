import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvkdr3wzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvkdr3wzl"/>`,
		"fallback": "mingcute:strikethrough-fill",
	});
}

export default Component;
