import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysamgs33o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysamgs33o"/>`,
		"fallback": "mdi:success-bold",
	});
}

export default Component;
