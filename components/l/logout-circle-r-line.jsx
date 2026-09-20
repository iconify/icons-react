import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrhzn-qkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrhzn-qkn"/>`,
		"fallback": "ri:logout-circle-r-line",
	});
}

export default Component;
