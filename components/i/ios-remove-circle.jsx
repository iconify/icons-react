import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6jy33b3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6jy33b3b"/>`,
		"fallback": "ion:ios-remove-circle",
	});
}

export default Component;
