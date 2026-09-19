import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbta3-b_z.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbta3-b_z"/>`,
		"fallback": "si-glyph:two-arrow-in-left-right",
	});
}

export default Component;
