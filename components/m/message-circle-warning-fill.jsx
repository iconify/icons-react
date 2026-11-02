import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkm10qtia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkm10qtia"/>`,
		"fallback": "mingcute:message-circle-warning-fill",
	});
}

export default Component;
