import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmjg9xeev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmjg9xeev"/>`,
		"fallback": "mdi:shield-key-outline",
	});
}

export default Component;
