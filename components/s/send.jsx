import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl888_buv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl888_buv"/>`,
		"fallback": "ion:send",
	});
}

export default Component;
