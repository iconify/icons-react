import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyxjm0p6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyxjm0p6z"/>`,
		"fallback": "pixelarticons:laugh-sharp",
	});
}

export default Component;
