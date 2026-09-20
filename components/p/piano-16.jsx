import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w86kp8b-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w86kp8b-m"/>`,
		"fallback": "qlementine-icons:piano-16",
	});
}

export default Component;
