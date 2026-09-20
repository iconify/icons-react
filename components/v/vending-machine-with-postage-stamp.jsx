import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8t3jxb0c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8t3jxb0c"/>`,
		"fallback": "pinhead:vending-machine-with-postage-stamp",
	});
}

export default Component;
