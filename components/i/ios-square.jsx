import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jayb1w7jx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jayb1w7jx"/>`,
		"fallback": "ion:ios-square",
	});
}

export default Component;
