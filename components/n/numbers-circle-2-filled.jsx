import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uecyfgbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uecyfgbwa"/>`,
		"fallback": "tdesign:numbers-circle-2-filled",
	});
}

export default Component;
