import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o36r4393d.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o36r4393d"/>`,
		"fallback": "system-uicons:share",
	});
}

export default Component;
