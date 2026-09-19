import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr-3m1bmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr-3m1bmf"/>`,
		"fallback": "ion:move-sharp",
	});
}

export default Component;
