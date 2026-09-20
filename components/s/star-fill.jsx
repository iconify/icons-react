import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly-x4abvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly-x4abvy"/>`,
		"fallback": "mingcute:star-fill",
	});
}

export default Component;
