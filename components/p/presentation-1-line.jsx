import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axr0p6pmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axr0p6pmp"/>`,
		"fallback": "mingcute:presentation-1-line",
	});
}

export default Component;
