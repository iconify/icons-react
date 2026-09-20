import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk5t21bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk5t21bgc"/>`,
		"fallback": "mdi:notification-settings",
	});
}

export default Component;
