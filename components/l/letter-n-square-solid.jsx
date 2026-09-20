import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yptlkpd2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yptlkpd2e"/>`,
		"fallback": "mynaui:letter-n-square-solid",
	});
}

export default Component;
