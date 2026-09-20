import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzy-5qbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzy-5qbbt"/>`,
		"fallback": "mingcute:rewind-forward-square-10-line",
	});
}

export default Component;
