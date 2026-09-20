import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9q8d4e-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9q8d4e-c"/>`,
		"fallback": "mingcute:look-up-fill",
	});
}

export default Component;
