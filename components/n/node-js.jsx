import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydg52ccyj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydg52ccyj"/>`,
		"fallback": "fa7-brands:node-js",
	});
}

export default Component;
