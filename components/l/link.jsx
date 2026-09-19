import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfd7l7bfz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfd7l7bfz"/>`,
		"fallback": "f7:link",
	});
}

export default Component;
