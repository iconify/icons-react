import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on4ugfwlf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on4ugfwlf"/>`,
		"fallback": "pinhead:person",
	});
}

export default Component;
