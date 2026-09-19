import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odyie6but.css';
import '../../css/e/en-3d656m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odyie6but"/><path class="en-3d656m"/>`,
		"fallback": "ion:ios-arrow-dropright",
	});
}

export default Component;
