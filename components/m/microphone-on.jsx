import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndutjfb2y.css';
import '../../css/p/p431tn58m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndutjfb2y"/><path class="p431tn58m"/>`,
		"fallback": "circum:microphone-on",
	});
}

export default Component;
