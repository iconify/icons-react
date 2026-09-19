import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdp7c3a2c.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdp7c3a2c"/>`,
		"fallback": "si-glyph:pawn",
	});
}

export default Component;
