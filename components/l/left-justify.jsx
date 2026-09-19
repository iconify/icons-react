import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyi-sxdur.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyi-sxdur"/>`,
		"fallback": "si-glyph:left-justify",
	});
}

export default Component;
