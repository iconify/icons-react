import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn-6hubiu.css';
import '../../css/w/w59lw5byo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn-6hubiu"/><path class="w59lw5byo"/>`,
		"fallback": "ion:md-restaurant",
	});
}

export default Component;
