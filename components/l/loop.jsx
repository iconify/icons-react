import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxkwrxb9i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxkwrxb9i"/>`,
		"fallback": "radix-icons:loop",
	});
}

export default Component;
