import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbtoxbc4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbtoxbc4v"/>`,
		"fallback": "lineicons:vk",
	});
}

export default Component;
