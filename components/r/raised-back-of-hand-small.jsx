import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0lbcs7zx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0lbcs7zx"/>`,
		"fallback": "dinkie-icons:raised-back-of-hand-small",
	});
}

export default Component;
