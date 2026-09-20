import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml8f8msdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml8f8msdh"/>`,
		"fallback": "mingcute:medium-fill",
	});
}

export default Component;
