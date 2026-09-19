import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1v2tk9wk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1v2tk9wk"/>`,
		"fallback": "f7:textbox",
	});
}

export default Component;
