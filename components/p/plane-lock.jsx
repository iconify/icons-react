import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yenf5hr5h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yenf5hr5h"/>`,
		"fallback": "fa7-solid:plane-lock",
	});
}

export default Component;
