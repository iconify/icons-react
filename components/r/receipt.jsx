import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cajek1mxb.css';
import '../../css/y/yjjqxcmso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cajek1mxb"/><path class="yjjqxcmso"/>`,
		"fallback": "ion:receipt",
	});
}

export default Component;
