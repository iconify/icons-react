import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2ak_qb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2ak_qb2v"/>`,
		"fallback": "hugeicons:swipe-left-07",
	});
}

export default Component;
