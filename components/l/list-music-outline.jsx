import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu0mq3bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu0mq3bpc"/>`,
		"fallback": "flowbite:list-music-outline",
	});
}

export default Component;
