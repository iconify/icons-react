import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyawn68za.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyawn68za"/>`,
		"fallback": "si-glyph:shovel",
	});
}

export default Component;
