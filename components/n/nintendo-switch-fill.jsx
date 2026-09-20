import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbyr-ac6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbyr-ac6d"/>`,
		"fallback": "mingcute:nintendo-switch-fill",
	});
}

export default Component;
