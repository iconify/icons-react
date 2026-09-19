import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ors6v7rpy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ors6v7rpy"/>`,
		"fallback": "si-glyph:leftwards-arrow-to-bar",
	});
}

export default Component;
