import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgs-q4b7x.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgs-q4b7x"/>`,
		"fallback": "si-glyph:square-plus",
	});
}

export default Component;
