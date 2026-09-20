import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vepxg1bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vepxg1bka"/>`,
		"fallback": "mingcute:layout-fill",
	});
}

export default Component;
