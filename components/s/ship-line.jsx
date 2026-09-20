import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc4hwzb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc4hwzb0u"/>`,
		"fallback": "mingcute:ship-line",
	});
}

export default Component;
