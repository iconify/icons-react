import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owl0rtbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owl0rtbyx"/>`,
		"fallback": "mynaui:letter-i-square",
	});
}

export default Component;
