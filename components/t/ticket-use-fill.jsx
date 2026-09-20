import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxzs0nbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxzs0nbct"/>`,
		"fallback": "lets-icons:ticket-use-fill",
	});
}

export default Component;
