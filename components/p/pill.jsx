import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-xxnwghl.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-xxnwghl"/>`,
		"fallback": "si-glyph:pill",
	});
}

export default Component;
