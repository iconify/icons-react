import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ielc4mb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ielc4mb8x"/>`,
		"fallback": "humbleicons:trash",
	});
}

export default Component;
