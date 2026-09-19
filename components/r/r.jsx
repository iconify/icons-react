import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8y80gtls.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8y80gtls"/>`,
		"fallback": "glyphs:r",
	});
}

export default Component;
