import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcqgukb1e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcqgukb1e"/>`,
		"fallback": "fa7-brands:reddit",
	});
}

export default Component;
