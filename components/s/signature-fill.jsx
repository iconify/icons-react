import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fszddsb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fszddsb8e"/>`,
		"fallback": "mingcute:signature-fill",
	});
}

export default Component;
