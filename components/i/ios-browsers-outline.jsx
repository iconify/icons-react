import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa24fvbdv.css';
import '../../css/f/fd7vi_cbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa24fvbdv"/><path class="fd7vi_cbs"/>`,
		"fallback": "ion:ios-browsers-outline",
	});
}

export default Component;
