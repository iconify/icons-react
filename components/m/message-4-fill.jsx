import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbxx-hb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbxx-hb_e"/>`,
		"fallback": "mingcute:message-4-fill",
	});
}

export default Component;
