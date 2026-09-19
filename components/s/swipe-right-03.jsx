import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfzg1kbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfzg1kbda"/>`,
		"fallback": "hugeicons:swipe-right-03",
	});
}

export default Component;
