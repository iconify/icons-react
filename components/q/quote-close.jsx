import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlo6nbbqp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlo6nbbqp"/>`,
		"fallback": "si-glyph:quote-close",
	});
}

export default Component;
