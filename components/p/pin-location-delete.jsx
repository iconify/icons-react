import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty80_-i1u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty80_-i1u"/>`,
		"fallback": "si-glyph:pin-location-delete",
	});
}

export default Component;
