import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc66k6u8b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc66k6u8b"/>`,
		"fallback": "la:smile-wink",
	});
}

export default Component;
