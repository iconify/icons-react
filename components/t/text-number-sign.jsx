import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1bus9b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1bus9b3v"/>`,
		"fallback": "hugeicons:text-number-sign",
	});
}

export default Component;
