import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5c9r5brk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5c9r5brk"/>`,
		"fallback": "bi:lungs-fill",
	});
}

export default Component;
