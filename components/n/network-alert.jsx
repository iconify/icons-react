import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy1wcmb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy1wcmb6z"/>`,
		"fallback": "noviair:network-alert",
	});
}

export default Component;
