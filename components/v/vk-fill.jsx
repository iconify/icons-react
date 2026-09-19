import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlqn9tbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlqn9tbif"/>`,
		"fallback": "akar-icons:vk-fill",
	});
}

export default Component;
