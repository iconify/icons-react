import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2febtbia.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2febtbia"/>`,
		"fallback": "si-glyph:pin-location-remove",
	});
}

export default Component;
