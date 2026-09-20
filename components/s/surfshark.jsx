import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iopi0eb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iopi0eb3m"/>`,
		"fallback": "thesvg-color:surfshark",
	});
}

export default Component;
