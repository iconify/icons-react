import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l49z6bbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l49z6bbmb"/>`,
		"fallback": "mdi:tray-remove",
	});
}

export default Component;
