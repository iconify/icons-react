import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxb7qbbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxb7qbbvb"/>`,
		"fallback": "mdi:music-rest-whole",
	});
}

export default Component;
