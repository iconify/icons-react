import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz7yahttz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz7yahttz"/>`,
		"fallback": "si-glyph:two-arrow-left",
	});
}

export default Component;
