import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy-vk3dmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy-vk3dmo"/>`,
		"fallback": "pixelarticons:lock",
	});
}

export default Component;
