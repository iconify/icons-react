import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-9_lojyo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-9_lojyo"/>`,
		"fallback": "la:text-width",
	});
}

export default Component;
