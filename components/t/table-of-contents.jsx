import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef4-qabdm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef4-qabdm"/>`,
		"fallback": "carbon:table-of-contents",
	});
}

export default Component;
