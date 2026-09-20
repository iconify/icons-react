import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk9_32boj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vk9_32boj"/>`,
		"fallback": "ix:tag-logging-filled",
	});
}

export default Component;
