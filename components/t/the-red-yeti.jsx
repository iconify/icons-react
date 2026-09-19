import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx0k6uber.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx0k6uber"/>`,
		"fallback": "fa7-brands:the-red-yeti",
	});
}

export default Component;
