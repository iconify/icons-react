import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya_hj3bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya_hj3bcj"/>`,
		"fallback": "mdi:video-2d",
	});
}

export default Component;
