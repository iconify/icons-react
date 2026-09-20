import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w70ijjb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w70ijjb6v"/>`,
		"fallback": "streamline-cyber-color:scale-horizontal",
	});
}

export default Component;
