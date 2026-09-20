import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z43h6nbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z43h6nbwa"/>`,
		"fallback": "tdesign:support-filled",
	});
}

export default Component;
