import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7pxqxb_e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7pxqxb_e"/>`,
		"fallback": "f7:perspective",
	});
}

export default Component;
