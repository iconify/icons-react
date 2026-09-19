import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzqwh5b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzqwh5b9z"/>`,
		"fallback": "boxicons:minus-square-filled",
	});
}

export default Component;
