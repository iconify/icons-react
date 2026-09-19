import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbpl-x4go.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbpl-x4go"/>`,
		"fallback": "ion:ios-pulse-strong",
	});
}

export default Component;
