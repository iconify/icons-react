import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wayttgbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wayttgbbj"/>`,
		"fallback": "hugeicons:swipe-left-09",
	});
}

export default Component;
