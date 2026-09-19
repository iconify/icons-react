import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ll97trp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ll97trp"/>`,
		"fallback": "carbon:use-case-include",
	});
}

export default Component;
