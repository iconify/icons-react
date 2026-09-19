import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_362bcck.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_362bcck"/>`,
		"fallback": "fa-regular:laugh-squint",
	});
}

export default Component;
