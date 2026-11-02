import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogkky7bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogkky7bkl"/>`,
		"fallback": "mingcute:square-arrow-down-fill",
	});
}

export default Component;
