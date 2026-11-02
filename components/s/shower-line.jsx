import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps22e6bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps22e6bmt"/>`,
		"fallback": "mingcute:shower-line",
	});
}

export default Component;
