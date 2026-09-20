import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8bx3o-vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8bx3o-vc"/>`,
		"fallback": "mage:notification-bell-question-mark-fill",
	});
}

export default Component;
