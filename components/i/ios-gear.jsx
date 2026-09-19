import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cry_rhb2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cry_rhb2e"/>`,
		"fallback": "ion:ios-gear",
	});
}

export default Component;
