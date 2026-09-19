import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2bfijbmx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2bfijbmx"/>`,
		"fallback": "fa7-brands:snapchat-ghost",
	});
}

export default Component;
