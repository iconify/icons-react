import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cay9onbvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cay9onbvz"/>`,
		"fallback": "ion:ios-filing-outline",
	});
}

export default Component;
