import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx54t9boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nx54t9boa"/>`,
		"fallback": "heroicons:receipt-refund-solid",
	});
}

export default Component;
