import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eryjosv9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eryjosv9l"/>`,
		"fallback": "hugeicons:sword-03",
	});
}

export default Component;
