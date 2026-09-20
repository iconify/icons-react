import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/squnhsb2r.css';

const viewBox = {"width":224,"height":224};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="squnhsb2r"/>`,
		"fallback": "thesvg-color:rust-dark",
	});
}

export default Component;
