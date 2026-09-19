import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch7d5hy0v.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch7d5hy0v"/>`,
		"fallback": "si-glyph:newspaper",
	});
}

export default Component;
