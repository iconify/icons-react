import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh7v1eb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh7v1eb1v"/>`,
		"fallback": "mdi:play-box-lock-outline",
	});
}

export default Component;
