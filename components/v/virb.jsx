import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcrzusb6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcrzusb6o"/>`,
		"fallback": "cib:virb",
	});
}

export default Component;
