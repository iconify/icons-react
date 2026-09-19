import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xakuhrbia.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xakuhrbia"/>`,
		"fallback": "si-glyph:light-house",
	});
}

export default Component;
