import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmvuh727u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmvuh727u"/>`,
		"fallback": "mingcute:save-2-line",
	});
}

export default Component;
