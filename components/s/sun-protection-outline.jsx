import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xltm0abxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xltm0abxg"/>`,
		"fallback": "mdi:sun-protection-outline",
	});
}

export default Component;
