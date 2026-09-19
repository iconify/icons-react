import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d64-tcb5u.css';

const viewBox = {"width":400,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d64-tcb5u"/>`,
		"fallback": "ps:scribd",
	});
}

export default Component;
