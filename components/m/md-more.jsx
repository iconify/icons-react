import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwt5gdbfd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwt5gdbfd"/>`,
		"fallback": "ion:md-more",
	});
}

export default Component;
