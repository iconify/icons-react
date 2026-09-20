import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw9le9bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw9le9bcs"/>`,
		"fallback": "mingcute:restore-line",
	});
}

export default Component;
