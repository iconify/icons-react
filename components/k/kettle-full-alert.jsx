import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk-19x-6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk-19x-6b"/>`,
		"fallback": "mdi:kettle-full-alert",
	});
}

export default Component;
