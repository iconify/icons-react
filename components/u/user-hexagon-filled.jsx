import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yai8d9m1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yai8d9m1m"/>`,
		"fallback": "boxicons:user-hexagon-filled",
	});
}

export default Component;
