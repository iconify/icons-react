import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1_0dc9au.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1_0dc9au"/>`,
		"fallback": "f7:slider-horizontal-below-rectangle",
	});
}

export default Component;
