import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhd4-8i0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhd4-8i0c"/>`,
		"fallback": "carbon:undo",
	});
}

export default Component;
