import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8c5so3vk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8c5so3vk"/>`,
		"fallback": "pinhead:sailing-ship",
	});
}

export default Component;
