import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7_rc0b0s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7_rc0b0s"/>`,
		"fallback": "glyphs:underline-bold",
	});
}

export default Component;
