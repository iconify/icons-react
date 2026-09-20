import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo96tyb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo96tyb0n"/>`,
		"fallback": "ri:network-error-fill",
	});
}

export default Component;
