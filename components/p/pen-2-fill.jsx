import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac-5x1biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac-5x1biv"/>`,
		"fallback": "mingcute:pen-2-fill",
	});
}

export default Component;
