import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmtjz3qxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmtjz3qxn"/>`,
		"fallback": "mdi:star-four-points",
	});
}

export default Component;
