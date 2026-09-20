import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2aqevb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2aqevb6e"/>`,
		"fallback": "mynaui:letter-x-octagon",
	});
}

export default Component;
