import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk0xwtbsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk0xwtbsy"/>`,
		"fallback": "ion:thunderstorm-outline",
	});
}

export default Component;
