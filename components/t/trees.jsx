import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5-e7lj0x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5-e7lj0x"/>`,
		"fallback": "foundation:trees",
	});
}

export default Component;
