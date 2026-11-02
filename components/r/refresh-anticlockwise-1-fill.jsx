import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm03p3z6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm03p3z6i"/>`,
		"fallback": "mingcute:refresh-anticlockwise-1-fill",
	});
}

export default Component;
