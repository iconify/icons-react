import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trb0p2uxa.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trb0p2uxa"/>`,
		"fallback": "si-glyph:ruler",
	});
}

export default Component;
