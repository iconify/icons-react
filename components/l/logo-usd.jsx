import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrabqj9ns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrabqj9ns"/>`,
		"fallback": "ion:logo-usd",
	});
}

export default Component;
