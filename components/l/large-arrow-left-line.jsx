import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce2w5xbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce2w5xbck"/>`,
		"fallback": "mingcute:large-arrow-left-line",
	});
}

export default Component;
