import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtbv83b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtbv83b-v"/>`,
		"fallback": "mynaui:minimize-one-solid",
	});
}

export default Component;
