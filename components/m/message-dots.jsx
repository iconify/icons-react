import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma2wh1fer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma2wh1fer"/>`,
		"fallback": "tabler:message-dots",
	});
}

export default Component;
