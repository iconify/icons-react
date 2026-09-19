import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7hfa2jyg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7hfa2jyg"/>`,
		"fallback": "icons8:moon",
	});
}

export default Component;
