import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj1v9refi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj1v9refi"/>`,
		"fallback": "mingcute:minimize-line",
	});
}

export default Component;
