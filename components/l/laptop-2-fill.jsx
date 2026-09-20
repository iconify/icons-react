import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvef6x8av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvef6x8av"/>`,
		"fallback": "mingcute:laptop-2-fill",
	});
}

export default Component;
