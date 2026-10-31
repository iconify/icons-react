import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j31zipu8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j31zipu8q"/>`,
		"fallback": "coolicons:move-diagonal-1-round",
	});
}

export default Component;
