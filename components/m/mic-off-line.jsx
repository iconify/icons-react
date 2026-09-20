import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywq4k-80h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywq4k-80h"/>`,
		"fallback": "mingcute:mic-off-line",
	});
}

export default Component;
