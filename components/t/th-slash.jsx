import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrao2yb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrao2yb9x"/>`,
		"fallback": "uil:th-slash",
	});
}

export default Component;
