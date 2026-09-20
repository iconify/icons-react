import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucp5eibww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucp5eibww"/>`,
		"fallback": "token:lcx",
	});
}

export default Component;
