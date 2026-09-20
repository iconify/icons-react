import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv8a032vk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv8a032vk"/>`,
		"fallback": "qlementine-icons:jump-over-16",
	});
}

export default Component;
