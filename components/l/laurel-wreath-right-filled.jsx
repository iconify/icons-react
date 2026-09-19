import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5g6_n8oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5g6_n8oz"/>`,
		"fallback": "boxicons:laurel-wreath-right-filled",
	});
}

export default Component;
