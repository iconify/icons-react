import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7z-3ac4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7z-3ac4b"/>`,
		"fallback": "mingcute:numbers-09-sort-descending-line",
	});
}

export default Component;
