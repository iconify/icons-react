import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7w-cnw3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7w-cnw3j"/>`,
		"fallback": "mingcute:key-1-line",
	});
}

export default Component;
