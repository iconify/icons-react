import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi9fd7blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi9fd7blb"/>`,
		"fallback": "mdi:microsoft-xamarin-outline",
	});
}

export default Component;
