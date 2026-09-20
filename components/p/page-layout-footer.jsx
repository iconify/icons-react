import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmuxh0buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmuxh0buz"/>`,
		"fallback": "mdi:page-layout-footer",
	});
}

export default Component;
