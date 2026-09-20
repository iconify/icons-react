import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6wahwc1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6wahwc1v"/>`,
		"fallback": "mage:notification-bell-minus-fill",
	});
}

export default Component;
