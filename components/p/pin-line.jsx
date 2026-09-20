import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uifvd8bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uifvd8bms"/>`,
		"fallback": "mingcute:pin-line",
	});
}

export default Component;
