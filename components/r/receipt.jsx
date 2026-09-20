import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okv6f5bis.css';
import '../../css/u/uq6a4ac5u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okv6f5bis"/><path class="uq6a4ac5u"/>`,
		"fallback": "openmoji:receipt",
	});
}

export default Component;
