import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccx1e7b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccx1e7b1k"/>`,
		"fallback": "mingcute:oil-line",
	});
}

export default Component;
