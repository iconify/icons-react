import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybz5izn0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybz5izn0x"/>`,
		"fallback": "heroicons:ticket",
	});
}

export default Component;
