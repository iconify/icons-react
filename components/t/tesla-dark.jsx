import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uee9srb7s.css';
import '../../css/l/l1wv36b8h.css';

const viewBox = {"width":254.6,"height":253.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uee9srb7s"/><path class="l1wv36b8h"/>`,
		"fallback": "thesvg-color:tesla-dark",
	});
}

export default Component;
