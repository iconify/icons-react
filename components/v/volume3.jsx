import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tigutsb4y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tigutsb4y"/>`,
		"fallback": "raphael:volume3",
	});
}

export default Component;
