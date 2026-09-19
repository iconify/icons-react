import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cem9iobou.css';

const viewBox = {"width":1952,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cem9iobou"/>`,
		"fallback": "fa:vk",
	});
}

export default Component;
