import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc0rfw0vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc0rfw0vk"/>`,
		"fallback": "uil:restaurant",
	});
}

export default Component;
