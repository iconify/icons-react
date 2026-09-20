import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6un2calu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6un2calu"/>`,
		"fallback": "solar:square-arrow-left-up-bold",
	});
}

export default Component;
