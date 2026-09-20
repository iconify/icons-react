import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8t3-ybky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8t3-ybky"/>`,
		"fallback": "mdi:shape-circle-plus",
	});
}

export default Component;
