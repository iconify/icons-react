import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq92o0bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq92o0bks"/>`,
		"fallback": "mdi:raw",
	});
}

export default Component;
