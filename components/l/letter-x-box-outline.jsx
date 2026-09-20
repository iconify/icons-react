import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsd5u-_9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsd5u-_9k"/>`,
		"fallback": "mdi:letter-x-box-outline",
	});
}

export default Component;
