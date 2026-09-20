import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw-n8ebic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw-n8ebic"/>`,
		"fallback": "ri:shopping-bag-fill",
	});
}

export default Component;
