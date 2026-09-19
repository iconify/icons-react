import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbqv5ub4i.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbqv5ub4i"/>`,
		"fallback": "si-glyph:site-map",
	});
}

export default Component;
