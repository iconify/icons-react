import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7z1vnbjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7z1vnbjl"/>`,
		"fallback": "ion:ios-arrow-down",
	});
}

export default Component;
