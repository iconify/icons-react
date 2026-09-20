import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5ehiablu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5ehiablu"/>`,
		"fallback": "pinhead:motorcycle-and-ruble",
	});
}

export default Component;
