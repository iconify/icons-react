import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9albibko.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9albibko"/>`,
		"fallback": "pinhead:star-of-david",
	});
}

export default Component;
