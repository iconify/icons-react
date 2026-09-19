import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvafd1y8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvafd1y8q"/>`,
		"fallback": "boxicons:pyramid-filled",
	});
}

export default Component;
