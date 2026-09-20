import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7mbenbgv.css';
import '../../css/j/j2bhf764p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7mbenbgv"/><path class="j2bhf764p"/>`,
		"fallback": "mingcute:linux-fill",
	});
}

export default Component;
