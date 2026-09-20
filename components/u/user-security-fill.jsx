import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo_h-m8ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo_h-m8ce"/>`,
		"fallback": "mingcute:user-security-fill",
	});
}

export default Component;
