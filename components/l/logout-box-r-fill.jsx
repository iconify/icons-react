import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5c5z8huf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5c5z8huf"/>`,
		"fallback": "ri:logout-box-r-fill",
	});
}

export default Component;
