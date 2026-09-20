import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwke6u-sx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwke6u-sx"/>`,
		"fallback": "pinhead:ring-linked-to-ring-with-jewel",
	});
}

export default Component;
