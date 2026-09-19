import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc6xorb6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc6xorb6v"/>`,
		"fallback": "ion:ios-backspace",
	});
}

export default Component;
