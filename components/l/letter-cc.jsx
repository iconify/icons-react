import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixid9lbur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixid9lbur"/>`,
		"fallback": "carbon:letter-cc",
	});
}

export default Component;
