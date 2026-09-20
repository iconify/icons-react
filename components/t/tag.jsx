import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5jm7bc9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f5jm7bc9i"/>`,
		"fallback": "ix:tag",
	});
}

export default Component;
