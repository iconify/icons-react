import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxh9hzbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxh9hzbwy"/>`,
		"fallback": "boxicons:refresh-ccw-alt",
	});
}

export default Component;
