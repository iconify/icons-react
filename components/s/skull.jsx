import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on59fzbsd.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on59fzbsd"/>`,
		"fallback": "si-glyph:skull",
	});
}

export default Component;
