import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0ppqcb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0ppqcb6u"/>`,
		"fallback": "mynaui:sun-snow",
	});
}

export default Component;
