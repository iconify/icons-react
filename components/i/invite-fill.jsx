import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erhpgh0an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erhpgh0an"/>`,
		"fallback": "mingcute:invite-fill",
	});
}

export default Component;
