import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6olgfbfs.css';
import '../../css/c/cos-qwbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6olgfbfs"/><path class="cos-qwbkp"/>`,
		"fallback": "streamline-ultimate:messages-people-user-check-bold",
	});
}

export default Component;
