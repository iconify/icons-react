import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejuhadc8v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejuhadc8v"/>`,
		"fallback": "f7:list-number-rtl",
	});
}

export default Component;
