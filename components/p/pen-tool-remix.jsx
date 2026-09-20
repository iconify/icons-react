import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk-_l-3je.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vk-_l-3je"/>`,
		"fallback": "streamline:pen-tool-remix",
	});
}

export default Component;
