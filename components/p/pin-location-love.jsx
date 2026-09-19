import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyn838j8t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyn838j8t"/>`,
		"fallback": "si-glyph:pin-location-love",
	});
}

export default Component;
