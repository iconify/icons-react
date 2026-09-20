import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em32fsb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em32fsb6t"/>`,
		"fallback": "mdi:network-strength-4",
	});
}

export default Component;
