import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zep153b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zep153b6q"/>`,
		"fallback": "solar:text-italic-bold",
	});
}

export default Component;
