import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wishomb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wishomb3q"/>`,
		"fallback": "mingcute:pinwheel-line",
	});
}

export default Component;
