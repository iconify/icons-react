import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9qzp4yjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9qzp4yjb"/>`,
		"fallback": "boxicons:megaphone-alt-filled",
	});
}

export default Component;
