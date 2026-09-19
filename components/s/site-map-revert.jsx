import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6a0jkahm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6a0jkahm"/>`,
		"fallback": "si-glyph:site-map-revert",
	});
}

export default Component;
