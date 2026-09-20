import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw654hwgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw654hwgs"/>`,
		"fallback": "mingcute:shopping-bag-1-line",
	});
}

export default Component;
