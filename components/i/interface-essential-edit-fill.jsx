import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auzyjbssd.css';
import '../../css/u/uk0alub0v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auzyjbssd"/><path class="uk0alub0v"/>`,
		"fallback": "streamline-pixel:interface-essential-edit-fill",
	});
}

export default Component;
