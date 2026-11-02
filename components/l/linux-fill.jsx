import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzqd4p8cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzqd4p8cr"/>`,
		"fallback": "mingcute:linux-fill",
	});
}

export default Component;
