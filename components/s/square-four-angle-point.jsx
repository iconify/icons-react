import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7rkwyp9k.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7rkwyp9k"/>`,
		"fallback": "si-glyph:square-four-angle-point",
	});
}

export default Component;
