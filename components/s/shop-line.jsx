import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy4jracrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy4jracrm"/>`,
		"fallback": "mingcute:shop-line",
	});
}

export default Component;
