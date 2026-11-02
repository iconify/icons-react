import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y667grbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y667grbwb"/>`,
		"fallback": "mingcute:rewind-backward-square-15-fill",
	});
}

export default Component;
