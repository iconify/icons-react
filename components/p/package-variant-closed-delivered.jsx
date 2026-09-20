import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw6b44bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw6b44bqp"/>`,
		"fallback": "mdi:package-variant-closed-delivered",
	});
}

export default Component;
