import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyj7cpbni.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyj7cpbni"/>`,
		"fallback": "si-glyph:keyboard",
	});
}

export default Component;
