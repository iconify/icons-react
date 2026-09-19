import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tou30pmzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tou30pmzm"/>`,
		"fallback": "iconoir:long-arrow-right-up-1",
	});
}

export default Component;
