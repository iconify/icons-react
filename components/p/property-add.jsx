import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuzg7bx1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuzg7bx1q"/>`,
		"fallback": "hugeicons:property-add",
	});
}

export default Component;
