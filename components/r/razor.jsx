import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2zq3k1ko.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2zq3k1ko"/>`,
		"fallback": "whh:razor",
	});
}

export default Component;
