import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5_b0h3gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5_b0h3gx"/>`,
		"fallback": "mingcute:sound-line-fill",
	});
}

export default Component;
