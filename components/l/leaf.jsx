import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u48l9nr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4u48l9nr"/>`,
		"fallback": "ion:leaf",
	});
}

export default Component;
