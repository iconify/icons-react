import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9v5viccb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9v5viccb"/>`,
		"fallback": "system-uicons:mail-remove",
	});
}

export default Component;
