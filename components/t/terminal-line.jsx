import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-5j1ab6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-5j1ab6h"/>`,
		"fallback": "mingcute:terminal-line",
	});
}

export default Component;
