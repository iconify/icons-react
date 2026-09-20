import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x04hbkbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="x04hbkbty"/>`,
		"fallback": "proicons:square",
	});
}

export default Component;
