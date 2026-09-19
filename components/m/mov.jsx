import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch6k2lb3l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch6k2lb3l"/>`,
		"fallback": "carbon:mov",
	});
}

export default Component;
