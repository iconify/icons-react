import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un14ccb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un14ccb0l"/>`,
		"fallback": "flowbite:video-camera-outline",
	});
}

export default Component;
