import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaxiv8bih.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaxiv8bih"/>`,
		"fallback": "si-glyph:note",
	});
}

export default Component;
