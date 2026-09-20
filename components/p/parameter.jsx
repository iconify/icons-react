import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc7iu5jzd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yc7iu5jzd"/>`,
		"fallback": "ix:parameter",
	});
}

export default Component;
