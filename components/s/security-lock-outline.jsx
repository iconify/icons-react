import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ummc0db4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ummc0db4k"/>`,
		"fallback": "mdi:security-lock-outline",
	});
}

export default Component;
