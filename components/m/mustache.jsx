import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdpuf55bt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdpuf55bt"/>`,
		"fallback": "si-glyph:mustache",
	});
}

export default Component;
