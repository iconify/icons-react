import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkv5dq48z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkv5dq48z"/>`,
		"fallback": "tdesign:sun-fall-filled",
	});
}

export default Component;
