import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhd17n_ca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhd17n_ca"/>`,
		"fallback": "carbon:text-short-paragraph",
	});
}

export default Component;
