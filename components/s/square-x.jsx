import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr-j4s5gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr-j4s5gy"/>`,
		"fallback": "tabler:square-x",
	});
}

export default Component;
