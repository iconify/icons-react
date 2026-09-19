import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-0lx72p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-0lx72p"/>`,
		"fallback": "carbon:text-long-paragraph",
	});
}

export default Component;
