import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6hk80b0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6hk80b0v"/>`,
		"fallback": "streamline:stock",
	});
}

export default Component;
