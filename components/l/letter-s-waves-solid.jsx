import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbszjp4ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbszjp4ft"/>`,
		"fallback": "mynaui:letter-s-waves-solid",
	});
}

export default Component;
