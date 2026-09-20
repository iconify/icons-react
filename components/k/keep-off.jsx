import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4bjv1bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4bjv1bu"/>`,
		"fallback": "mdi:keep-off",
	});
}

export default Component;
