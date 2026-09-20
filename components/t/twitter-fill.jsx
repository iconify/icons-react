import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v84rw7b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v84rw7b_r"/>`,
		"fallback": "mingcute:twitter-fill",
	});
}

export default Component;
