import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq8o9f3-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq8o9f3-q"/>`,
		"fallback": "keyline-icons:terminal-cursor",
	});
}

export default Component;
