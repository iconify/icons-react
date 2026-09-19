import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml7-_x_yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml7-_x_yg"/>`,
		"fallback": "guidance:luggage-check-in",
	});
}

export default Component;
