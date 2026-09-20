import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3qe22b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3qe22b_w"/>`,
		"fallback": "pixel:users",
	});
}

export default Component;
