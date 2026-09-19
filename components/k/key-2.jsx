import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkjklj6ai.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkjklj6ai"/>`,
		"fallback": "si-glyph:key-2",
	});
}

export default Component;
