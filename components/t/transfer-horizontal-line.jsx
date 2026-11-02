import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ook-wzb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ook-wzb8t"/>`,
		"fallback": "mingcute:transfer-horizontal-line",
	});
}

export default Component;
