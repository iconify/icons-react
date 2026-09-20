import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpz0oeb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpz0oeb6u"/>`,
		"fallback": "pixelarticons:lasso",
	});
}

export default Component;
