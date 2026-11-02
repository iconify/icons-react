import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oue1irbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oue1irbta"/>`,
		"fallback": "mingcute:scarf-fill",
	});
}

export default Component;
