import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqr59y0qe.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqr59y0qe"/>`,
		"fallback": "whh:pin",
	});
}

export default Component;
