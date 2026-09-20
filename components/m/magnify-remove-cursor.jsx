import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3flw9_uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3flw9_uz"/>`,
		"fallback": "mdi:magnify-remove-cursor",
	});
}

export default Component;
