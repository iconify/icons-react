import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e59qz2blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e59qz2blr"/>`,
		"fallback": "andrsrxn:stroke-style-dashed",
	});
}

export default Component;
