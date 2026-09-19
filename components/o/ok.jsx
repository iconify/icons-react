import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8mty44yz.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8mty44yz"/>`,
		"fallback": "el:ok",
	});
}

export default Component;
