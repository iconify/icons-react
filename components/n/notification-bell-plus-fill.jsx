import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig5m35nvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig5m35nvn"/>`,
		"fallback": "mage:notification-bell-plus-fill",
	});
}

export default Component;
