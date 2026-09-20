import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coebxcb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coebxcb2l"/>`,
		"fallback": "mdi:settings-play",
	});
}

export default Component;
