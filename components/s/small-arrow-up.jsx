import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toakrhjlf.css';

const viewBox = {"width":380,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toakrhjlf"/>`,
		"fallback": "il:small-arrow-up",
	});
}

export default Component;
