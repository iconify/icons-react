import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrzv0hbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrzv0hbxz"/>`,
		"fallback": "ri:progress-8-line",
	});
}

export default Component;
