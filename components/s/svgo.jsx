import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk0s25b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk0s25b-y"/>`,
		"fallback": "thesvg-color:svgo",
	});
}

export default Component;
