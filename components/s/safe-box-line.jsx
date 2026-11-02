import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulin1z6mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulin1z6mh"/>`,
		"fallback": "mingcute:safe-box-line",
	});
}

export default Component;
