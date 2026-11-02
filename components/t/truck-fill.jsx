import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx1v6kb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx1v6kb9c"/>`,
		"fallback": "mingcute:truck-fill",
	});
}

export default Component;
