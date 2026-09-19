import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ediyy5vvi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ediyy5vvi"/>`,
		"fallback": "f7:skew",
	});
}

export default Component;
