import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/conqp8bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="conqp8bkq"/>`,
		"fallback": "hugeicons:radiation",
	});
}

export default Component;
