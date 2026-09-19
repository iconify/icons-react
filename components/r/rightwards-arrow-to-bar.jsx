import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aopzmf17w.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aopzmf17w"/>`,
		"fallback": "si-glyph:rightwards-arrow-to-bar",
	});
}

export default Component;
