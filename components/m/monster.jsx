import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg79iebtx.css';
import '../../css/p/pnj4y1nku.css';
import '../../css/y/ybgg7vk0w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg79iebtx"/><path class="pnj4y1nku"/><path class="ybgg7vk0w"/>`,
		"fallback": "carbon:monster",
	});
}

export default Component;
