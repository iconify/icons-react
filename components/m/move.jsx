import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e46-h6c3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e46-h6c3u"/>`,
		"fallback": "hugeicons:move",
	});
}

export default Component;
