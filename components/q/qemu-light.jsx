import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpfa0s5nb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpfa0s5nb"/>`,
		"fallback": "selfhst:qemu-light",
	});
}

export default Component;
