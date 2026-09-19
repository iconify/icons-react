import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr10uwbnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr10uwbnf"/>`,
		"fallback": "file-icons:lisp",
	});
}

export default Component;
