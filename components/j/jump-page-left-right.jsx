import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmajru3gm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmajru3gm"/>`,
		"fallback": "si-glyph:jump-page-left-right",
	});
}

export default Component;
