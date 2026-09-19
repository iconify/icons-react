import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a03eb3b2b.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a03eb3b2b"/>`,
		"fallback": "si-glyph:trees",
	});
}

export default Component;
