import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp3w4lbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp3w4lbhm"/>`,
		"fallback": "reicon:umbrella-filled",
	});
}

export default Component;
