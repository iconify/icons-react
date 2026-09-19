import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywr37pcaq.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywr37pcaq"/>`,
		"fallback": "fontisto:left-align",
	});
}

export default Component;
