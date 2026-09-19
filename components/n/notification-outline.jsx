import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj6k4bkhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj6k4bkhu"/>`,
		"fallback": "ci:notification-outline",
	});
}

export default Component;
