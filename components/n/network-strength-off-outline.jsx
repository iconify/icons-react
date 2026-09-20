import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyovyz5ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyovyz5ra"/>`,
		"fallback": "mdi:network-strength-off-outline",
	});
}

export default Component;
