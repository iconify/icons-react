import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ons7wnazk.css';

const viewBox = {"width":462,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ons7wnazk"/>`,
		"fallback": "ls:sort",
	});
}

export default Component;
