import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n249hpp4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n249hpp4e"/>`,
		"fallback": "hugeicons:swipe-down-05",
	});
}

export default Component;
